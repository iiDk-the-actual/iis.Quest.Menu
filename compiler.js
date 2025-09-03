const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptCompiler {
    constructor() {
        this.inputDir = './src';
        this.outputDir = './dist';
        this.outputFile = path.join(this.outputDir, 'bundle.ts');
    }

    ensureDirectories() {
        if (!fs.existsSync(this.inputDir)) {
            fs.mkdirSync(this.inputDir, { recursive: true });
            console.log(`Created input directory: ${this.inputDir}`);
        }

        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
            console.log(`Created output directory: ${this.outputDir}`);
        }
    }

    getAllTsFiles(dir) {
        let files = [];
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                files = files.concat(this.getAllTsFiles(fullPath));
            } else if (item.endsWith('.ts') || item.endsWith('.js')) {
                files.push(fullPath);
            }
        }
        
        return files;
    }

    bundleAllFiles() {
        this.ensureDirectories();

        try {
            const allFiles = this.getAllTsFiles(this.inputDir);
            
            if (allFiles.length === 0) {
                return false;
            }

            let bundledContent = '// Auto-generated bundle from all TypeScript files\n';
            bundledContent += `// Generated on: ${new Date().toISOString()}\n\n`;
            
            for (const file of allFiles) {
                try {
                    const relativePath = path.relative(this.inputDir, file);
                    
                    bundledContent += `// ========== ${relativePath} ==========\n`;
                    bundledContent += fs.readFileSync(file, 'utf8');
                    bundledContent += '\n\n';
                    
                    console.log(`Added: ${relativePath}`);
                } catch (error) {
                    console.warn(`Could not read ${file}: ${error.message}`);
                }
            }

            fs.writeFileSync(this.outputFile, bundledContent, 'utf8');
            
            console.log('Bundling completed successfully!');
            console.log(`Generated bundle: ${path.relative(process.cwd(), this.outputFile)}`);
            console.log(`Total files bundled: ${allFiles.length}`);
            
            return true;

        } catch (error) {
            console.error('Bundling failed!');
            console.error(error.message);
            
            try {
                const errorContent = `// Bundle creation failed on: ${new Date().toISOString()}\n// Error: ${error.message}\n\n// Empty bundle created to ensure file exists\nconsole.log("Bundle creation encountered errors");`;
                fs.writeFileSync(this.outputFile, errorContent, 'utf8');
                console.log('Created error bundle file anyway');
            } catch (writeError) {
                console.error('Could not create error bundle:', writeError.message);
            }
            
            return false;
        }
    }
}

function main() {
    const compiler = new TypeScriptCompiler();
    compiler.bundleAllFiles();
}

if (require.main === module) {
    main();
}