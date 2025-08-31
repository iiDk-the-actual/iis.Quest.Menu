# ii's Quest Menu
ii's Quest Menu is a port of [ii's Stupid Menu](https://github.com/iiDk-the-actual/iis.Stupid.Menu) to Frida, letting it run on Quest 3-3s headsets.

## How to Use ([Video Tutorial](https://www.youtube.com/watch?v=YhiYD-SWrOo))
1. Run [root exploit](https://drive.iidk.online/src/Quest3-Root)
2. Run the Frida server `./data/local/tmp/frida-server` & (If doing on standalone only, Termux > "su", "cd", the command)
3. `adb tcpip 5000`
4. `adb connect 192.168.[local ip address]:5000`

5. `pip install frida`
6. Find Frida's FOLDER and make it an environment variable (mine was C:\Users\Grayson\AppData\Local\Programs\Python\Python313\Scripts\)

7. Run the batch script and go willy nilly in whatilly game you desilly
