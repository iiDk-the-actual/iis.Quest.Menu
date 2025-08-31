<p align="center">
  <a href="#"><img src="https://i.imgur.com/HtO7VKw.png"></a>
</p>

---

<p align="center">
	<a href="https://github.com/iiDk-the-actual/iis.Quest.Menu/releases"><img src="https://img.shields.io/github/v/release/iiDk-the-actual/iis.Quest.Menu?label=version&style=for-the-badge"></a>
	<a href="https://github.com/iiDk-the-actual/iis.Quest.Menu/releases/latest"><img src="https://img.shields.io/github/downloads/iiDk-the-actual/iis.Quest.Menu/latest?style=for-the-badge"></a>
	<a href="https://discord.gg/iidk"><img src="https://img.shields.io/discord/1170093288557129748?label=discord&style=for-the-badge&color=blueviolet"></a>
</p>

---

# 🖥️ ii's Quest Menu
ii's Quest Menu is a port of [ii's Stupid Menu](https://github.com/iiDk-the-actual/iis.Stupid.Menu) to Frida, letting it run on Quest 3-3s headsets.
This mod utilizes a modified version of [vfsfitvnm/frida-il2cpp-bridge](https://github.com/vfsfitvnm/frida-il2cpp-bridge) to communicate with Gorilla Tag.
You may use this mod for any purposes you desire as long as it falls under the MIT license. Feel free to modify it, add or remove mods, or even port it to other games.

## ⚠️ Disclaimer
The exploit used to obtain root access has been **patched** in versions post V79. **Most headsets** will be able to run the exploit fine (as of 8/30/2025), but some may encounter issues or bugs. **I am not responsible for any issues or diminished performance resulting from the use of this mod with VR headsets.**

## 📥 How to Use ([Video Tutorial](https://www.youtube.com/watch?v=YhiYD-SWrOo))
1. Run the [root exploit](https://drive.iidk.online/src/Quest3-Root).
2. Run the Frida server `./data/local/tmp/frida-server &` (If doing on standalone only, Termux > `su`, `cd`, the command).
3. Run the following commands: `adb tcpip 5000` `adb connect 192.168.[local ip address]:5000` `pip install frida`
4. Find Frida's FOLDER and make it an environment variable (mine was C:\Users\Grayson\AppData\Local\Programs\Python\Python313\Scripts\)
5. Run the batch script and go willy nilly in whatilly game you desilly
