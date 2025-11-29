// ii's Quest Menu, by @goldentrophy / @crimsoncauldron
// Warning: Ugly code. I hate TypeScript.
var version = "1.4.1";
var boardMaterial = null;
var buttonClickDelay = 0.0;
var menu = null;
var reference = null;
var referenceCollider = null;
var leftPrimary = false;
var leftSecondary = false;
var rightPrimary = false;
var rightSecondary = false;
var leftGrab = false;
var rightGrab = false;
var leftTrigger = false;
var rightTrigger = false;
var deltaTime = 0.0;
var time = 0.0;
var frameCount = 0;
var buttonSound = 8;
var LerpMenu = false;
var menuscale = 1;
var previousGhostKey = false;
var previousInvisKey = false;
var previousNoclipKey = false;
var perviousTeleportKey = false;
var walkPos = null;
var walkNormal = null;
var previousDash = false;
var closePosition = null;
var tagGunDelay = 0.0;
var idGunDelay = 0.0;
var splashDelay = 0.0;
var lagGunDelay = 0.0;
var lastTime = 0.0;
var oldSlide = null;
var leftPlatform = null;
var rightPlatform = null;
var checkpoint = null;
var positions = [];
var lineRenderHolder = null;
var isLineRenderQueued = false;
var linePool = [];
var lvT = null;
var rvT = null;
var buttonNotifications = true;
var enabledRecent = false;
var highPunchPower = false;
var espCollide = false;
var bgColor = [1.0, 0.5, 0.0, 1.0];
var textColor = [1.0, 0.7450981, 0.4901961, 1.0];
var buttonColor = [0.666, 0.333, 0.0, 1.0];
var buttonPressedColor = [0.333, 0.150, 0.0, 1.0];
var menuName = "ii's <b>Stupid</b> Menu";
var themeIndex = 0;
var buttonIndex = 0;
var favoriteColor = 2;
var currentNotification = "";
var notifactionResetTime = 0;
Il2Cpp.perform(function () {
    var images = {
        "Assembly-CSharp": Il2Cpp.domain.assembly("Assembly-CSharp").image,
        "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,
        "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image,
        "UnityEngine.UIModule": Il2Cpp.domain.assembly("UnityEngine.UIModule").image,
        "UnityEngine.UI": Il2Cpp.domain.assembly("UnityEngine.UI").image,
        "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly("UnityEngine.TextRenderingModule").image,
        "PhotonUnityNetworking": Il2Cpp.domain.assembly("PhotonUnityNetworking").image,
        "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
    };
    var AssemblyCSharp = images["Assembly-CSharp"];
    var UnityEngineCore = images["UnityEngine.CoreModule"];
    var UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    var UnityEngineUI = images["UnityEngine.UI"];
    var UnityEngineUIModule = images["UnityEngine.UIModule"];
    var UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    var PhotonUnityNetworking = images["PhotonUnityNetworking"];
    var UnityTextMeshPro = images["Unity.TextMeshPro"];
    var ControllerInputPoller = AssemblyCSharp.class("ControllerInputPoller").field("instance").value;
    var GorillaTaggerClass = AssemblyCSharp.class("GorillaTagger");
    var GTPlayerClass = AssemblyCSharp.class("GorillaLocomotion.GTPlayer");
    var VRRig = AssemblyCSharp.class("VRRig");
    var GorillaNot = AssemblyCSharp.class("GorillaNot");
    var GorillaParentClass = AssemblyCSharp.class("GorillaParent");
    var NetworkSystemClass = AssemblyCSharp.class("NetworkSystem");
    var GorillaReportButton = AssemblyCSharp.class("GorillaReportButton");
    var FreeHoverboardManager = AssemblyCSharp.class("FreeHoverboardManager").method("get_instance").invoke();
    var GameMode = AssemblyCSharp.class("GorillaGameModes.GameMode");
    var FriendshipGroupDetection = AssemblyCSharp.class("GorillaTagScripts.FriendshipGroupDetection").method("get_Instance").invoke();
    var GorillaVelocityTracker = AssemblyCSharp.class("GorillaLocomotion.Climbing.GorillaVelocityTracker");
    var PhotonNetwork = PhotonUnityNetworking.class("Photon.Pun.PhotonNetwork");
    var RpcTarget = PhotonUnityNetworking.class("Photon.Pun.RpcTarget");
    var GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    var Object = UnityEngineCore.class("UnityEngine.Object");
    var SystemObject = Il2Cpp.corlib.class("System.Object");
    var Thread = Il2Cpp.corlib.class("System.Threading.Thread");
    var Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    var Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    var Time = UnityEngineCore.class("UnityEngine.Time");
    var Resources = UnityEngineCore.class("UnityEngine.Resources");
    var Material = UnityEngineCore.class("UnityEngine.Material");
    var Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    var Shader = UnityEngineCore.class("UnityEngine.Shader");
    var Color = UnityEngineCore.class("UnityEngine.Color");
    var RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    var LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    var PlayerPrefs = UnityEngineCore.class("UnityEngine.PlayerPrefs");
    var MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
    var BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    var SphereCollider = UnityEnginePhysics.class("UnityEngine.SphereCollider");
    var CapsuleCollider = UnityEnginePhysics.class("UnityEngine.CapsuleCollider");
    var Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    var Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    var Physics = UnityEnginePhysics.class("UnityEngine.Physics");
    var Ray = UnityEngineCore.class("UnityEngine.Ray");
    var RaycastHit = UnityEnginePhysics.class("UnityEngine.RaycastHit");
    var Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    var CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    var GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    var Text = UnityEngineUI.class("UnityEngine.UI.Text");
    var Font = UnityEngineTextRendering.class("UnityEngine.Font");
    var TextMeshPro = UnityTextMeshPro.class("TMPro.TextMeshPro");
    var GorillaTagger = GorillaTaggerClass.field("_instance").value;
    var GorillaParent = GorillaParentClass.field("instance").value;
    var GorillaNotInst = GorillaNot.field("instance").value;
    var NetworkSystem = NetworkSystemClass.field("Instance").value;
    var rigidbody = GorillaTagger.field("<rigidbody>k__BackingField").value;
    var LocalRig = GorillaTagger.field("offlineVRRig").value;
    var GTPlayer = GTPlayerClass.field("_instance").value;
    var GorillaComputer = Il2Cpp.domain.assembly("Assembly-CSharp").image.class("GorillaNetworking.GorillaComputer").field("instance").value;
    var UberShader = Shader.method("Find").invoke(Il2Cpp.string("GorillaTag/UberShader"));
    var TextShader = Shader.method("Find").invoke(Il2Cpp.string("GUI/Text Shader"));
    var GorillaSurfaceOverride = AssemblyCSharp.class("GorillaSurfaceOverride");
    var zeroVector = Vector3.field("zeroVector").value;
    var oneVector = Vector3.field("oneVector").value;
    var identityQuaternion = Quaternion.field("identityQuaternion").value;
    var leftHandTransform = GorillaTagger.field("leftHandTransform").value;
    var rightHandTransform = GorillaTagger.field("rightHandTransform").value;
    var headCollider = GorillaTagger.field("headCollider").value;
    var bodyCollider = GorillaTagger.field("bodyCollider").value;
    var punchLastLeft = [zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector];
    var punchLastRight = [zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector, zeroVector];
    var LPrev = Vector3.field("zeroVector").value;
    var RPrev = Vector3.field("zeroVector").value;
    var LVel = Vector3.field("zeroVector").value;
    var RVel = Vector3.field("zeroVector").value;
    var AvgVel = Vector3.field("zeroVector").value;
    var righthand = false;
    var arial = Resources
        .method("GetBuiltinResource", 1)
        .inflate(Font)
        .invoke(Il2Cpp.string("Arial.ttf"));
    function Destroy(object) {
        Object.method("Destroy", 1).invoke(object);
    }
    function getComponent(obj, type) {
        return obj.method("GetComponent", 1).inflate(type).invoke();
    }
    function getComponentInParent(obj, type) {
        return obj.method("GetComponentInParent", 0).inflate(type).invoke();
    }
    function addComponent(obj, type) {
        return obj.method("AddComponent", 1).inflate(type).invoke();
    }
    function getOrAddComponent(obj, type) {
        var returnType = getComponent(obj, type);
        if (returnType != null && returnType != undefined) {
            return returnType;
        }
        return addComponent(obj, type);
    }
    function getObject(obj) {
        return GameObject.method("Find", 1).invoke(Il2Cpp.string(obj));
    }
    function playerIsLocal(player) {
        return player.method("get_isLocal").invoke();
    }
    function setPlayerName(name) {
        GorillaComputer.field("currentName").value = Il2Cpp.string(name);
        GorillaComputer.field("savedName").value = Il2Cpp.string(name);
        PlayerPrefs.method("SetString").invoke(Il2Cpp.string("playerName"), Il2Cpp.string(name));
        PlayerPrefs.method("Save").invoke();
        PhotonNetwork.method("get_LocalPlayer").invoke().method("set_NickName").invoke(Il2Cpp.string(name));
    }
    function setPlayerColor(color) {
        PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("redValue"), color[0]);
        PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("greenValue"), color[1]);
        PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("blueValue"), color[2]);
        PlayerPrefs.method("Save").invoke();
        GorillaTagger.method("UpdateColor").invoke(color[0], color[1], color[2]);
        var objectArray = Il2Cpp.array(SystemObject, [
            Il2Cpp.reference(color[0], Il2Cpp.Type.Enum.FLOAT),
            Il2Cpp.reference(color[1], Il2Cpp.Type.Enum.FLOAT),
            Il2Cpp.reference(color[2], Il2Cpp.Type.Enum.FLOAT)
        ]);
        var method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload("System.String", "Photon.Pun.RpcTarget", "System.Object[]");
        method.invoke(Il2Cpp.string("RPC_InitializeNoobMaterial"), 0, objectArray);
    }
    function getTransform(obj) {
        return obj.method("get_transform").invoke();
    }
    function world2Player(position) {
        position = Vector3.method("op_Subtraction", 2).invoke(position, getTransform(bodyCollider).method("get_position").invoke());
        position = Vector3.method("op_Addition", 2).invoke(position, getTransform(GorillaTagger).method("get_position").invoke());
        return position;
    }
    function teleportPlayer(position) {
        GTPlayer.method("TeleportTo", 3).invoke(world2Player(position), getTransform(GTPlayer).method("get_rotation").invoke(), false);
    }
    function sendAllOutgoing() {
        GorillaNotInst.field("rpcErrorMax").value = Number.MAX_SAFE_INTEGER;
        GorillaNotInst.field("rpcCallLimit").value = Number.MAX_SAFE_INTEGER;
        GorillaNotInst.field("logErrorMax").value = Number.MAX_SAFE_INTEGER;
        PhotonNetwork.method("set_MaxResendsBeforeDisconnect").invoke(Number.MAX_SAFE_INTEGER);
        PhotonNetwork.method("set_QuickResends").invoke(Number.MAX_SAFE_INTEGER);
        PhotonNetwork.method("SendAllOutgoingCommands").invoke();
    }
    function serialize() {
        PhotonNetwork.method("RunViewUpdate").invoke();
    }
    function renderMenuText(canvasObject, text, color, pos, size) {
        if (text === void 0) { text = ""; }
        if (color === void 0) { color = [1, 1, 1, 1]; }
        if (pos === void 0) { pos = zeroVector; }
        if (size === void 0) { size = oneVector; }
        var title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
        title.method("set_text").invoke(Il2Cpp.string(text));
        title.method("set_font").invoke(arial);
        title.method("set_fontSize").invoke(1);
        title.method("set_color").invoke(color);
        title.method("set_fontStyle").invoke(2);
        title.method("set_alignment").invoke(4);
        title.method("set_resizeTextForBestFit").invoke(true);
        title.method("set_resizeTextMinSize").invoke(0);
        var rectTransform = getComponent(title, RectTransform);
        rectTransform.method("set_sizeDelta").invoke(size);
        rectTransform.method("set_position").invoke(pos);
        rectTransform.method("set_rotation").invoke(Quaternion.method("Euler").invoke(180.0, 90.0, 90.0));
    }
    function createMaterial(shader) {
        var material = Material.new();
        return Material.method("CreateWithShader").invoke(material, shader);
    }
    function createObject(pos, rot, scale, primitiveType, colorArr, parent) {
        if (pos === void 0) { pos = zeroVector; }
        if (rot === void 0) { rot = identityQuaternion; }
        if (scale === void 0) { scale = oneVector; }
        if (primitiveType === void 0) { primitiveType = 3; }
        if (colorArr === void 0) { colorArr = [1, 1, 1, 1]; }
        if (parent === void 0) { parent = null; }
        var obj = GameObject.method("CreatePrimitive").invoke(primitiveType);
        var renderer = getComponent(obj, Renderer);
        if (colorArr[3] == 0) {
            renderer.method("set_enabled").invoke(false);
        }
        else {
            var material = renderer.method("get_material").invoke();
            material.method("set_shader").invoke(UberShader);
            material.method("set_color").invoke(colorArr);
        }
        var transform = getTransform(obj);
        if (parent != null) {
            transform.method("SetParent", 2).invoke(parent, false);
        }
        transform.method("set_position").invoke(pos);
        transform.method("set_rotation").invoke(rot);
        transform.method("set_localScale").invoke(scale);
        return obj;
    }
    function sendNotification(NotificationText, requiresReload, clearTime) {
        if (NotificationText === void 0) { NotificationText = ""; }
        if (requiresReload === void 0) { requiresReload = true; }
        if (clearTime === void 0) { clearTime = 5; }
        var isOld = (currentNotification == NotificationText);
        notifactionResetTime = time + clearTime;
        currentNotification = NotificationText;
        if (requiresReload && !isOld)
            reloadMenu();
    }
    function renderMenu() {
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        Destroy(getComponent(menu, BoxCollider));
        var menuBackground = createObject([0.1, 0, 0], identityQuaternion, [0.1, 1, 1], 3, bgColor, getTransform(menu));
        Destroy(getComponent(menuBackground, BoxCollider));
        var canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        var canvas = addComponent(canvasObject, Canvas);
        Destroy(getComponent(canvasObject, BoxCollider));
        var canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);
        renderMenuText(canvasObject, menuName + "<color=grey>[</color><color=white>".concat(currentPage + 1, "</color><color=grey>]</color>"), textColor, [0.11, 0, 0.175], [1, 0.1]);
        if (time > notifactionResetTime)
            currentNotification = "";
        renderMenuText(canvasObject, currentNotification, textColor, [0.11, 0, 0.275], [1, 0.1]);
        var disconnectButton = createObject([0.1, 0.0, 0.225], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
        disconnectButton.method("set_name").invoke(Il2Cpp.string("@Disconnect"));
        addComponent(disconnectButton, GorillaReportButton);
        getComponent(disconnectButton, BoxCollider).method("set_isTrigger").invoke(true);
        renderMenuText(canvasObject, "Disconnect", textColor, [0.11, 0, 0.225], [1, 0.1]);
        var returnButton = createObject([0.1, -0.175, -0.225], identityQuaternion, [0.09, 0.09, 0.09], 3, buttonColor, getTransform(menu));
        returnButton.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"));
        addComponent(returnButton, GorillaReportButton);
        getComponent(returnButton, BoxCollider).method("set_isTrigger").invoke(true);
        renderMenuText(canvasObject, "<", textColor, [0.11, -0.175, -0.225], [1, 0.1]);
        {
            var pageButton = createObject([0.1, 0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
            pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));
            addComponent(pageButton, GorillaReportButton);
            getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, "<", textColor, [0.11, 0.2, 0], [1, 0.1]);
        }
        {
            var pageButton = createObject([0.1, -0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
            pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));
            addComponent(pageButton, GorillaReportButton);
            getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, ">", textColor, [0.11, -0.2, 0], [1, 0.1]);
        }
        var i = 0;
        var targetMods = buttons[currentCategory]
            .slice(currentPage * 8)
            .slice(0, 8);
        var favorited = [];
        buttons[11].forEach(function (buttonData) {
            if (buttonData.buttonText != "Exit Favorite Mods")
                favorited.push(buttonData.buttonText);
        });
        var favTextColor = [
            Math.max(Math.min(textColor[0] + (favoriteColor == 0 ? (+1.0) : 0.2), 1), 0),
            Math.max(Math.min(textColor[1] + (favoriteColor == 1 ? (-0.1) : (favoriteColor == 0 ? (-0.1) : 0.2)), 1), 0),
            Math.max(Math.min(textColor[2] + (favoriteColor == 2 ? (-0.1) : (favoriteColor == 0 ? (-0.2) : 0.2)), 1), 0),
            Math.max(Math.min(textColor[3] + (favoriteColor == 3 ? (-0.7) : 0.0), 1), 0)
        ];
        targetMods.forEach(function (buttonData, index) {
            var button = createObject([0.105, 0, 0.13 - (i * 0.04)], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
            button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText));
            addComponent(button, GorillaReportButton);
            getComponent(button, BoxCollider).method("set_isTrigger").invoke(true);
            renderMenuText(canvasObject, buttonData.buttonText, favorited.includes(buttonData.buttonText) ? favTextColor : textColor, [0.11, 0, 0.13 - (i * 0.04)], [1, 0.1]);
            updateButtonColor(button, buttonData);
            i++;
        });
        getTransform(menu).method("set_localScale").invoke(Vector3.method("op_Multiply").invoke(Vector3.method("op_Multiply").invoke(getTransform(menu).method("get_localScale").invoke(), GTPlayer.field("nativeScale").value), menuscale));
        recenterMenu();
    }
    function renderReference() {
        if (righthand) {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, leftHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
        else {
            reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform);
            referenceCollider = getComponent(reference, Collider);
            getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
            reference.method("set_layer").invoke(2);
            addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
        }
    }
    function toggleFavorite(info) {
        var exists = false;
        for (var index = 0; index < buttons[11].length; index++) {
            var mod = buttons[11][index];
            if (mod.buttonText == info.buttonText) {
                exists = true;
                break;
            }
        }
        if (exists) {
            if (info.buttonText == "Exit Favorite Mods")
                return;
            for (var index = 0; index < buttons[11].length; index++) {
                var mod = buttons[11][index];
                if (mod.buttonText == info.buttonText) {
                    buttons[11].splice(index, 1);
                    break;
                }
            }
        }
        else {
            if (info.buttonText == "Exit Favorite Mods")
                return;
            buttons[11].push(info);
        }
    }
    function loadEnabled() {
        buttons[12].splice(1);
        buttons.forEach(function (buttonList, index) {
            if (index != 12 && index != 11) {
                buttonList.forEach(function (button) {
                    if (button.enabled)
                        buttons[12].push(button);
                });
            }
        });
    }
    var gunLocked = false;
    var lockTarget = null;
    var GunPointer = null;
    var GunLine = null;
    function renderGun(overrideLayerMask) {
        if (overrideLayerMask === void 0) { overrideLayerMask = null; }
        var StartPosition = rightHandTransform.method("get_position").invoke();
        var Direction = rightHandTransform.method("get_forward").invoke();
        var DirectionDivided = Vector3.method("op_Division").invoke(Direction, 4);
        var rayStartPosition = Vector3.method("op_Addition").invoke(StartPosition, DirectionDivided);
        var layerMask = overrideLayerMask || -3180559;
        var hits = Physics.method("RaycastAll", 4).invoke(rayStartPosition, Direction, 512.0, layerMask);
        var finalDistance = Infinity;
        var finalRay = null;
        for (var _i = 0, hits_1 = hits; _i < hits_1.length; _i++) {
            var hit = hits_1[_i];
            var distance = Vector3.method("Distance").invoke(hit.method("get_point").invoke(), StartPosition);
            if (distance < finalDistance) {
                finalRay = hit;
                finalDistance = distance;
            }
        }
        var EndPosition;
        if (gunLocked) {
            EndPosition = getTransform(lockTarget).method("get_position").invoke();
        }
        else {
            EndPosition = finalRay.method("get_point").invoke();
        }
        if (Vector3.method("op_Equality").invoke(EndPosition, zeroVector)) {
            var farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
            EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
        }
        if (GunPointer == null) {
            GunPointer = createObject(EndPosition, identityQuaternion, [0.1, 0.1, 0.1], 0, [1, 1, 1, 1]);
        }
        GunPointer.method("SetActive").invoke(true);
        var pointerTransform = getTransform(GunPointer);
        pointerTransform.method("set_position").invoke(EndPosition);
        var PointerRenderer = getComponent(GunPointer, Renderer);
        var material = PointerRenderer.method("get_material").invoke();
        material.method("set_shader").invoke(TextShader);
        var pointerColor = (gunLocked || rightTrigger) ? buttonPressedColor : buttonColor;
        material.method("set_color").invoke(pointerColor);
        var collider = getComponent(GunPointer, Collider);
        if (collider != null) {
            Destroy(collider);
        }
        if (GunLine == null) {
            var lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
            GunLine = addComponent(lineObj, LineRenderer);
        }
        else {
            GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
        }
        var lineMaterial = GunLine.method("get_material").invoke();
        lineMaterial.method("set_shader").invoke(TextShader);
        GunLine.method("set_startColor").invoke(bgColor);
        GunLine.method("set_endColor").invoke(bgColor);
        var lineWidth = 0.025;
        GunLine.method("set_startWidth").invoke(lineWidth);
        GunLine.method("set_endWidth").invoke(lineWidth);
        GunLine.method("set_positionCount").invoke(2);
        GunLine.method("set_useWorldSpace").invoke(true);
        GunLine.method("set_numCapVertices").invoke(10);
        GunLine.method("SetPosition").invoke(0, StartPosition);
        GunLine.method("SetPosition").invoke(1, EndPosition);
        if (rightTrigger || gunLocked) {
            var Step = 10;
            GunLine.method("set_positionCount").invoke(Step);
            GunLine.method("SetPosition").invoke(0, StartPosition);
            for (var i = 1; i < (Step - 1); i++) {
                var t = i / (Step - 1);
                var Position = Vector3.method("Lerp").invoke(StartPosition, EndPosition, t);
                var randomValue = Math.random();
                var offset = zeroVector;
                if (randomValue > 0.75) {
                    offset = [
                        (Math.random() * 0.2) - 0.1,
                        (Math.random() * 0.2) - 0.1,
                        (Math.random() * 0.2) - 0.1
                    ];
                }
                var finalPosition = Vector3.method("op_Addition").invoke(Position, offset);
                GunLine.method("SetPosition").invoke(i, finalPosition);
            }
            GunLine.method("SetPosition").invoke(Step - 1, EndPosition);
        }
        return { ray: finalRay, gunPointer: GunPointer };
    }
    function recenterMenu() {
        var menuTransform = getTransform(menu);
        var targetPos, targetRot;
        if (righthand) {
            targetPos = rightHandTransform.method("get_position").invoke();
            targetRot = rightHandTransform.method("get_rotation").invoke();
            targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, 0, 180));
        }
        else {
            targetPos = leftHandTransform.method("get_position").invoke();
            targetRot = leftHandTransform.method("get_rotation").invoke();
            targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, 0, 0));
        }
        if (LerpMenu) {
            var menuPos = menuTransform.method("get_position").invoke();
            var distance = Vector3.method("Distance").invoke(menuPos, zeroVector);
            if (distance < 1) {
                menuTransform.method("set_position").invoke(targetPos);
                menuTransform.method("set_rotation").invoke(targetRot);
            }
            else {
                var newPos = Vector3.method("Lerp").invoke(menuPos, targetPos, deltaTime * 15);
                menuTransform.method("set_position").invoke(newPos);
                var newRot = Quaternion.method("Slerp").invoke(menuTransform.method("get_rotation").invoke(), targetRot, deltaTime * 15);
                menuTransform.method("set_rotation").invoke(newRot);
            }
        }
        else {
            menuTransform.method("set_position").invoke(targetPos);
            menuTransform.method("set_rotation").invoke(targetRot);
        }
    }
    function reloadMenu() {
        if (menu != null) {
            Object.method("Destroy", 1).invoke(menu);
            menu = null;
        }
    }
    function updateButtonColor(button, buttonData) {
        var RendererClass = Il2Cpp.domain
            .assembly("UnityEngine.CoreModule")
            .image
            .class("UnityEngine.Renderer");
        var renderer = getComponent(button, RendererClass);
        if (!renderer) {
            return;
        }
        var material = renderer.method("get_material").invoke();
        material.method("set_color").invoke(buttonData.enabled ? buttonPressedColor : buttonColor);
    }
    function playButtonSound() {
        LocalRig.method("PlayHandTapLocal").invoke(buttonSound, false, 0.3);
        if (righthand) {
            GorillaTagger.method("StartVibration").invoke(true, 0.5, 0.075);
        }
        else {
            GorillaTagger.method("StartVibration").invoke(false, 0.5, 0.075);
        }
    }
    function toggleColliders(enabled) {
        var meshColliders = Object.method("FindObjectsOfType").inflate(MeshCollider).invoke();
        for (var i = 0; i < meshColliders.length; i++) {
            var meshCollider = meshColliders.get(i);
            meshCollider.method("set_enabled").invoke(enabled);
        }
    }
    var ButtonInfo = /** @class */ (function () {
        function ButtonInfo(config) {
            var _a, _b, _c;
            this.buttonText = config.buttonText;
            this.method = config.method;
            this.enableMethod = config.enableMethod;
            this.disableMethod = config.disableMethod;
            this.isTogglable = (_a = config.isTogglable) !== null && _a !== void 0 ? _a : true;
            this.toolTip = (_b = config.toolTip) !== null && _b !== void 0 ? _b : null;
            this.enabled = (_c = config.enabled) !== null && _c !== void 0 ? _c : false;
        }
        return ButtonInfo;
    }());
    var currentCategory = 0;
    var currentPage = 0;
    var buttons = [
        [
            new ButtonInfo({
                buttonText: "Settings",
                method: function () { currentCategory = 2; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the settings category."
            }),
            new ButtonInfo({
                buttonText: "Favorite Mods",
                method: function () { currentCategory = 11; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens your favorite mods."
            }),
            new ButtonInfo({
                buttonText: "Enabled Mods",
                method: function () { currentCategory = 12; currentPage = 0; loadEnabled(); },
                isTogglable: false,
                toolTip: "Opens your enabled mods."
            }),
            new ButtonInfo({
                buttonText: "Movement Mods",
                method: function () { currentCategory = 3; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the movement category."
            }),
            new ButtonInfo({
                buttonText: "Fun Mods",
                method: function () { currentCategory = 4; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the fun category."
            }),
            new ButtonInfo({
                buttonText: "Advantage Mods",
                method: function () { currentCategory = 5; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the advantage category."
            }),
            new ButtonInfo({
                buttonText: "Rig Mods",
                method: function () { currentCategory = 6; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the rig category."
            }),
            new ButtonInfo({
                buttonText: "Misc Mods",
                method: function () { currentCategory = 7; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the misc category."
            }),
            new ButtonInfo({
                buttonText: "Visual Mods",
                method: function () { currentCategory = 8; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the visual category."
            }),
            new ButtonInfo({
                buttonText: "Overpowered Mods",
                method: function () { currentCategory = 9; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the op category."
            }),
            new ButtonInfo({
                buttonText: "Safety Mods",
                method: function () { currentCategory = 10; currentPage = 0; },
                isTogglable: false,
                toolTip: "Opens the safety category."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Disconnect",
                method: function () { return NetworkSystem.method("ReturnToSinglePlayer").invoke(); },
                isTogglable: false,
                toolTip: "Disconnects you from the room."
            }),
            new ButtonInfo({
                buttonText: "PreviousPage",
                method: function () {
                    var lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;
                    currentPage--;
                    if (currentPage < 0)
                        currentPage = lastPage;
                },
                isTogglable: false
            }),
            new ButtonInfo({
                buttonText: "NextPage",
                method: function () {
                    var lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;
                    currentPage++;
                    currentPage %= lastPage + 1;
                },
                isTogglable: false
            }),
            new ButtonInfo({
                buttonText: "GlobalReturn",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            })
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Settings",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Change Menu Theme",
                method: function () {
                    themeIndex++;
                    themeIndex %= 11;
                    switch (themeIndex) {
                        case 0:
                            bgColor = [1.0, 0.5, 0.0, 1.0];
                            textColor = [1.0, 0.7450981, 0.4901961, 1.0];
                            buttonColor = [0.666, 0.333, 0.0, 1.0];
                            buttonPressedColor = [0.333, 0.150, 0.0, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 1:
                            bgColor = [1.0, 0.0, 0.0, 1.0];
                            textColor = [1.0, 1.0, 1.0, 1.0];
                            buttonColor = [0.0, 0.0, 0.0, 1.0];
                            buttonPressedColor = [1.0, 0.0, 0.0, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 2:
                            bgColor = [0.0, 1.0, 0.0, 1.0];
                            textColor = [1.0, 1.0, 1.0, 1.0];
                            buttonColor = [0.0, 0.0, 0.0, 1.0];
                            buttonPressedColor = [0.0, 1.0, 0.0, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 3:
                            bgColor = [0.0, 0.0, 1.0, 1.0];
                            textColor = [1.0, 1.0, 1.0, 1.0];
                            buttonColor = [0.0, 0.0, 0.0, 1.0];
                            buttonPressedColor = [0.0, 0.0, 1.0, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 4:
                            bgColor = [0.5, 0.0, 0.5, 1.0];
                            textColor = [1.0, 0.9, 1.0, 1.0];
                            buttonColor = [0.25, 0.0, 0.25, 1.0];
                            buttonPressedColor = [0.7, 0.0, 0.7, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 5:
                            bgColor = [0.0, 0.7, 0.7, 1.0];
                            textColor = [1.0, 0.2, 0.8, 1.0];
                            buttonColor = [0.0, 0.3, 0.3, 1.0];
                            buttonPressedColor = [1.0, 0.0, 0.7, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 6:
                            bgColor = [0.9, 0.7, 0.1, 1.0];
                            textColor = [0.0, 0.0, 0.0, 1.0];
                            buttonColor = [0.2, 0.2, 0.2, 1.0];
                            buttonPressedColor = [1.0, 0.84, 0.0, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 7:
                            bgColor = [0.7, 0.9, 1.0, 1.0];
                            textColor = [0.1, 0.2, 0.4, 1.0];
                            buttonColor = [0.5, 0.7, 0.9, 1.0];
                            buttonPressedColor = [0.2, 0.4, 0.8, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 8:
                            bgColor = [0.6, 0.0, 0.0, 1.0];
                            textColor = [1.0, 0.7, 0.2, 1.0];
                            buttonColor = [0.2, 0.0, 0.0, 1.0];
                            buttonPressedColor = [1.0, 0.3, 0.0, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 9:
                            bgColor = [0.05, 0.05, 0.1, 1.0];
                            textColor = [0.6, 0.8, 1.0, 1.0];
                            buttonColor = [0.1, 0.1, 0.2, 1.0];
                            buttonPressedColor = [0.4, 0.6, 1.0, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                        case 10:
                            bgColor = [0.125, 0.125, 0.125, 1.0];
                            textColor = [1.0, 1.0, 0.9, 1.0];
                            buttonColor = [0.111, 0.111, 0.222, 1.0];
                            buttonPressedColor = [0.111, 0.111, 0.67, 1.0];
                            boardMaterial.method("set_color").invoke(bgColor);
                            break;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the theme of the menu."
            }),
            new ButtonInfo({
                buttonText: "Change Button Sound",
                method: function () {
                    buttonIndex++;
                    buttonIndex %= 5;
                    switch (buttonIndex) {
                        case 0:
                            buttonSound = 8;
                            break;
                        case 1:
                            buttonSound = 66;
                            break;
                        case 2:
                            buttonSound = 67;
                            break;
                        case 3:
                            buttonSound = 84;
                            break;
                        case 4:
                            buttonSound = 106;
                            break;
                        case 5:
                            buttonSound = 189;
                            break;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the button sound."
            }),
            new ButtonInfo({
                buttonText: "Change Favorite Color",
                method: function () {
                    favoriteColor++;
                    favoriteColor %= 4;
                },
                isTogglable: false,
                toolTip: "Changes the text color of favorite mods."
            }),
            new ButtonInfo({
                buttonText: "Change Menu Scale",
                method: function () {
                    menuscale += 0.1;
                    if (menuscale > 1.5) {
                        menuscale = 0.3;
                    }
                },
                isTogglable: false,
                toolTip: "Changes the button sound."
            }),
            new ButtonInfo({
                buttonText: "Freeze Player in Menu",
                enabled: true,
                method: function () {
                    if (menu != null) {
                        if (closePosition == null) {
                            closePosition = getTransform(rigidbody).method("get_position").invoke();
                        }
                        else {
                            getTransform(rigidbody).method("set_position").invoke(closePosition);
                            rigidbody.method("set_velocity").invoke(zeroVector);
                        }
                    }
                    else {
                        closePosition = null;
                    }
                },
                toolTip: "Freezes your character while in the menu."
            }),
            new ButtonInfo({
                buttonText: "Button Notifications",
                enabled: true,
                method: function () { return buttonNotifications = true; },
                disableMethod: function () { return buttonNotifications = false; },
                toolTip: "Shows notifications when clicking menu buttons, may cause lag."
            }),
            new ButtonInfo({
                buttonText: "Enabled Recent",
                method: function () { return enabledRecent = true; },
                disableMethod: function () { return enabledRecent = false; },
                toolTip: "Shows recently disabled mods in enabled mods."
            }),
            new ButtonInfo({
                buttonText: "Right Hand",
                method: function () { return righthand = true; },
                disableMethod: function () { return righthand = false; },
                toolTip: "Lets you switch menu hand."
            }),
            new ButtonInfo({
                buttonText: "Lerp Menu",
                method: function () { return LerpMenu = true; },
                disableMethod: function () { return LerpMenu = false; },
                toolTip: "Makes the menu Lerped."
            }),
            new ButtonInfo({
                buttonText: "High Punch Power",
                enableMethod: function () { return highPunchPower = true; },
                disableMethod: function () { return highPunchPower = false; },
                toolTip: "Makes punch mod more powerful."
            }),
            new ButtonInfo({
                buttonText: "ESP Collisions",
                enableMethod: function () {
                    for (var _i = 0, linePool_1 = linePool; _i < linePool_1.length; _i++) {
                        var line = linePool_1[_i];
                        Destroy(line.method("get_gameObject").invoke());
                    }
                    linePool = [];
                    espCollide = true;
                },
                disableMethod: function () {
                    for (var _i = 0, linePool_2 = linePool; _i < linePool_2.length; _i++) {
                        var line = linePool_2[_i];
                        Destroy(line.method("get_gameObject").invoke());
                    }
                    linePool = [];
                    espCollide = false;
                },
                toolTip: "Makes ESP have collisions."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Movement Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Platforms",
                method: function () {
                    if (leftGrab) {
                        if (leftPlatform == null) {
                            var handTransform = leftHandTransform;
                            leftPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
                        }
                    }
                    else {
                        if (leftPlatform != null) {
                            Destroy(leftPlatform);
                            leftPlatform = null;
                        }
                    }
                    if (rightGrab) {
                        if (rightPlatform == null) {
                            var handTransform = rightHandTransform;
                            rightPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
                        }
                    }
                    else {
                        if (rightPlatform != null) {
                            Destroy(rightPlatform);
                            rightPlatform = null;
                        }
                    }
                },
                toolTip: "Spawns platforms when pressing grip."
            }),
            new ButtonInfo({
                buttonText: "Trigger Platforms",
                method: function () {
                    if (leftTrigger) {
                        if (leftPlatform == null) {
                            var handTransform = leftHandTransform;
                            leftPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
                        }
                    }
                    else {
                        if (leftPlatform != null) {
                            Destroy(leftPlatform);
                            leftPlatform = null;
                        }
                    }
                    if (rightTrigger) {
                        if (rightPlatform == null) {
                            var handTransform = rightHandTransform;
                            rightPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
                        }
                    }
                    else {
                        if (rightPlatform != null) {
                            Destroy(rightPlatform);
                            rightPlatform = null;
                        }
                    }
                },
                toolTip: "Spawns platforms when pressing trigger."
            }),
            new ButtonInfo({
                buttonText: "Frozone",
                method: function () {
                    if (leftGrab) {
                        if (leftPlatform == null) {
                            var handTransform = leftHandTransform;
                            leftPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
                            addComponent(leftPlatform, GorillaSurfaceOverride).field("overrideIndex").value = 61;
                        }
                    }
                    else {
                        if (leftPlatform != null) {
                            Destroy(leftPlatform);
                            leftPlatform = null;
                        }
                    }
                    if (rightGrab) {
                        if (rightPlatform == null) {
                            var handTransform = rightHandTransform;
                            rightPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
                            addComponent(rightPlatform, GorillaSurfaceOverride).field("overrideIndex").value = 61;
                        }
                    }
                    else {
                        if (rightPlatform != null) {
                            Destroy(rightPlatform);
                            rightPlatform = null;
                        }
                    }
                },
                toolTip: "Spawns slippy platforms when pressing grip."
            }),
            new ButtonInfo({
                buttonText: "Fly",
                method: function () {
                    if (rightPrimary) {
                        rigidbody.method("set_velocity").invoke(Vector3.field("zeroVector").value);
                        var transform = getTransform(GorillaTagger);
                        var forward = getTransform(headCollider).method("get_forward").invoke();
                        var position = transform.method("get_position").invoke();
                        forward = Vector3.method("op_Multiply", 2).invoke(forward, 25.0 * deltaTime);
                        position = Vector3.method("op_Addition", 2).invoke(position, forward);
                        transform.method("set_position").invoke(position);
                    }
                },
                toolTip: "Lets you fly around while holding A."
            }),
            new ButtonInfo({
                buttonText: "Trigger Fly",
                method: function () {
                    if (rightTrigger) {
                        rigidbody.method("set_velocity").invoke(Vector3.field("zeroVector").value);
                        var transform = getTransform(GorillaTagger);
                        var forward = getTransform(headCollider).method("get_forward").invoke();
                        var position = transform.method("get_position").invoke();
                        forward = Vector3.method("op_Multiply", 2).invoke(forward, 25.0 * deltaTime);
                        position = Vector3.method("op_Addition", 2).invoke(position, forward);
                        transform.method("set_position").invoke(position);
                    }
                },
                toolTip: "Lets you fly around while holding trigger."
            }),
            new ButtonInfo({
                buttonText: "Hand Fly",
                method: function () {
                    if (rightPrimary) {
                        var mulQV = Quaternion.methods.find(function (m) {
                            return m.name === "op_Multiply" &&
                                m.parameterCount === 2 &&
                                m.parameters[1].type.name.endsWith("Vector3");
                        }); // chatgpt no orhweer way to find this
                        rigidbody.method("set_velocity").invoke(Vector3.field("zeroVector").value);
                        var transform = getTransform(GorillaTagger);
                        var vrot = Quaternion.method("op_Multiply", 2).invoke(rightHandTransform.method("get_rotation").invoke(), GTPlayer.field("rightHand").field("handRotOffset").value);
                        var vfor = Vector3.method("get_forward").invoke();
                        var forward = mulQV.invoke(vrot, vfor);
                        var position = transform.method("get_position").invoke();
                        forward = Vector3.method("op_Multiply", 2).invoke(forward, 25.0 * deltaTime);
                        position = Vector3.method("op_Addition", 2).invoke(position, forward);
                        transform.method("set_position").invoke(position);
                    }
                },
                toolTip: "Lets you fly around with your hand while holding A."
            }),
            new ButtonInfo({
                buttonText: "Slow Time",
                method: function () {
                    var speed = -0.15;
                    var disp = Vector3.method("op_Addition", 2).invoke(rigidbody.method("get_linearVelocity").invoke(), Physics.method("get_gravity").invoke());
                    disp = Vector3.method("op_Multiply", 2).invoke(disp, Time.method("get_fixedDeltaTime").invoke() * speed);
                    rigidbody.method("MovePosition").invoke(Vector3.method("op_Addition", 2).invoke(rigidbody.method("get_position").invoke(), disp));
                },
                toolTip: "Slows down physics."
            }),
            new ButtonInfo({
                buttonText: "Quick Time",
                method: function () {
                    var speed = 0.15;
                    var disp = Vector3.method("op_Addition", 2).invoke(rigidbody.method("get_linearVelocity").invoke(), Physics.method("get_gravity").invoke());
                    disp = Vector3.method("op_Multiply", 2).invoke(disp, Time.method("get_fixedDeltaTime").invoke() * speed);
                    rigidbody.method("MovePosition").invoke(Vector3.method("op_Addition", 2).invoke(rigidbody.method("get_position").invoke(), disp));
                },
                toolTip: "Speeds up physics."
            }),
            new ButtonInfo({
                buttonText: "Up And Down",
                method: function () {
                    if (rightTrigger && rightGrab) {
                        rigidbody.method("set_velocity").invoke(Vector3.field("zeroVector").value);
                    }
                    if (rightTrigger && !rightGrab) {
                        rigidbody.method("AddForce").invoke(Vector3.field("upVector").value, 175 * deltaTime);
                    }
                    if (!rightTrigger && rightGrab) {
                        rigidbody.method("AddForce").invoke(Vector3.field("downVector").value, 175 * deltaTime);
                    }
                },
                toolTip: "Makes you go up when holding trigger, and down when holding grip."
            }),
            new ButtonInfo({
                buttonText: "Size Changer",
                disableMethod: function () {
                    GTPlayer.field("nativeScale").value = 1;
                    getTransform(LocalRig).method("set_localScale").invoke(Vector3.field("one").value.method("op_Multiply").invoke(LocalRig.field("NativeScale").value));
                },
                method: function () {
                    if (rightTrigger) {
                        GTPlayer.field("nativeScale").value += 0.01;
                        getTransform(LocalRig).method("set_localScale").invoke(Vector3.field("one").value.method("op_Multiply").invoke(LocalRig.field("NativeScale").value));
                    }
                    if (leftTrigger) {
                        GTPlayer.field("nativeScale").value -= 0.01;
                        getTransform(LocalRig).method("set_localScale").invoke(Vector3.field("one").value.method("op_Multiply").invoke(LocalRig.field("NativeScale").value));
                    }
                },
                toolTip: "Makes you able to change size with triggers."
            }),
            new ButtonInfo({
                buttonText: "Checkpoint",
                disableMethod: function () {
                    if (checkpoint != null) {
                        Destroy(checkpoint);
                        checkpoint = null;
                    }
                },
                method: function () {
                    if (rightGrab && !rightPrimary) {
                        if (checkpoint == null) {
                            var handTransform = rightHandTransform;
                            checkpoint = createObject(handTransform.method("get_position").invoke(), identityQuaternion, [0.2, 0.2, 0.2], 3, bgColor);
                            Destroy(getComponent(checkpoint, BoxCollider));
                        }
                        else {
                            var handTransform = rightHandTransform;
                            checkpoint.method("get_transform").invoke().method("set_position").invoke(handTransform.method("get_position").invoke());
                        }
                    }
                    if (rightPrimary) {
                        if (checkpoint != null) {
                            teleportPlayer(checkpoint.method("get_transform").invoke().method("get_position").invoke());
                            rigidbody.method("set_velocity").invoke(zeroVector);
                        }
                    }
                },
                toolTip: "Place a checkpoint with grip and teleport to it with A."
            }),
            new ButtonInfo({
                buttonText: "Rewind",
                disableMethod: function () {
                    positions = [];
                },
                method: function () {
                    if (rightTrigger) {
                        var pos = positions[positions.length - 1];
                        teleportPlayer(pos[0]);
                        leftHandTransform.method("set_position").invoke(pos[1]);
                        rightHandTransform.method("set_position").invoke(pos[2]);
                        leftHandTransform.method("set_rotation").invoke(pos[3]);
                        rightHandTransform.method("set_rotation").invoke(pos[4]);
                        rigidbody.method("set_linearVelocity").invoke(pos[5]);
                        positions.pop();
                    }
                    else {
                        positions.push([
                            bodyCollider.method("get_transform").invoke().method("get_position").invoke(),
                            leftHandTransform.method("get_position").invoke(),
                            rightHandTransform.method("get_position").invoke(),
                            leftHandTransform.method("get_rotation").invoke(),
                            rightHandTransform.method("get_rotation").invoke(),
                            rigidbody.method("get_linearVelocity").invoke()
                        ]);
                        if (positions.length > 8640) {
                            positions.shift();
                        }
                    }
                },
                toolTip: "Brings you back in time when holding trigger."
            }),
            new ButtonInfo({
                buttonText: "No Tag Freeze",
                method: function () { return GTPlayer.field("disableMovement").value = false; },
                toolTip: "Disables tag freeze on your character.",
            }),
            new ButtonInfo({
                buttonText: "Low Gravity",
                method: function () {
                    var force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (6.66 / deltaTime)));
                    rigidbody.method("AddForce", 2).invoke(force, 5);
                },
                toolTip: "Makes gravity lower on your character."
            }),
            new ButtonInfo({
                buttonText: "Zero Gravity",
                method: function () {
                    var force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
                    rigidbody.method("AddForce", 2).invoke(force, 5);
                },
                toolTip: "Makes gravity lower on your character."
            }),
            new ButtonInfo({
                buttonText: "High Gravity",
                method: function () {
                    var force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("downVector").value, (deltaTime * (7.77 / deltaTime)));
                    rigidbody.method("AddForce", 2).invoke(force, 5);
                },
                toolTip: "Makes gravity higher on your character."
            }),
            new ButtonInfo({
                buttonText: "Weak Wall Walk",
                method: function () {
                    if (GTPlayer.method("IsHandTouching").invoke(true) || GTPlayer.method("IsHandTouching").invoke(false)) {
                        var ray = GTPlayer.field("lastHitInfoHand").value;
                        walkPos = ray.method("get_point").invoke();
                        walkNormal = ray.method("get_normal").invoke();
                    }
                    if (walkPos != Vector3.field("zeroVector").value && rightGrab) {
                        var force = Vector3.method("op_Multiply", 2).invoke(walkNormal, -5);
                        rigidbody.method("AddForce").invoke(force, 5);
                        var zeroForce = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
                        rigidbody.method("AddForce", 2).invoke(zeroForce, 5);
                    }
                },
                toolTip: "Makes you get brought towards any wall you touch when holding grip, but weaker."
            }),
            new ButtonInfo({
                buttonText: "Wall Walk",
                method: function () {
                    if (GTPlayer.method("IsHandTouching").invoke(true) || GTPlayer.method("IsHandTouching").invoke(false)) {
                        var ray = GTPlayer.field("lastHitInfoHand").value;
                        walkPos = ray.method("get_point").invoke();
                        walkNormal = ray.method("get_normal").invoke();
                    }
                    if (walkPos != Vector3.field("zeroVector").value && rightGrab) {
                        var force = Vector3.method("op_Multiply", 2).invoke(walkNormal, -9.81);
                        rigidbody.method("AddForce").invoke(force, 5);
                        var zeroForce = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
                        rigidbody.method("AddForce", 2).invoke(zeroForce, 5);
                    }
                },
                toolTip: "Makes you get brought towards any wall you touch when holding grip."
            }),
            new ButtonInfo({
                buttonText: "Teleport Gun",
                method: function () {
                    if (rightGrab) {
                        var gunData = renderGun();
                        var gunPointer = gunData.gunPointer;
                        if (rightTrigger && !perviousTeleportKey) {
                            teleportPlayer(getTransform(gunPointer).method("get_position").invoke());
                            rigidbody.method("set_velocity").invoke(zeroVector);
                        }
                        perviousTeleportKey = rightTrigger;
                    }
                },
                toolTip: "Teleports you to wherever your hand desires."
            }),
            new ButtonInfo({
                buttonText: "Airstrike Gun",
                method: function () {
                    if (rightGrab) {
                        var gunData = renderGun();
                        var gunPointer = gunData.gunPointer;
                        if (rightTrigger && !perviousTeleportKey) {
                            teleportPlayer(Vector3.method("op_Addition", 2).invoke([0, 30, 0], getTransform(gunPointer).method("get_position").invoke()));
                            rigidbody.method("set_velocity").invoke(zeroVector);
                        }
                        perviousTeleportKey = rightTrigger;
                    }
                },
                toolTip: "Teleports you to wherever your hand desires, except farther up, then launches you back down."
            }),
            new ButtonInfo({
                buttonText: "Airstrike Random",
                method: function () {
                    var vrrigs = GorillaParent.field("vrrigs").value;
                    var vrrigtotal = vrrigs.method("get_Count").invoke();
                    var playerRig = vrrigs.method("get_Item").invoke(Math.floor(Math.random() * vrrigtotal));
                    teleportPlayer(Vector3.method("op_Addition", 2).invoke([0, 30, 0], getTransform(playerRig).method("get_position").invoke()));
                    rigidbody.method("set_velocity").invoke(zeroVector);
                },
                isTogglable: false,
                toolTip: "Teleports you to a random player, except farther up, then launches you back down."
            }),
            new ButtonInfo({
                buttonText: "Teleport To Random",
                method: function () {
                    var vrrigs = GorillaParent.field("vrrigs").value;
                    var vrrigtotal = vrrigs.method("get_Count").invoke();
                    var playerRig = vrrigs.method("get_Item").invoke(Math.floor(Math.random() * vrrigtotal));
                    teleportPlayer(getTransform(playerRig).method("get_position").invoke());
                    rigidbody.method("set_velocity").invoke(zeroVector);
                },
                isTogglable: false,
                toolTip: "Teleports you to a random player."
            }),
            new ButtonInfo({
                buttonText: "Dash",
                method: function () {
                    if (rightPrimary && !previousDash) {
                        var leftRightVector = getTransform(headCollider).method("get_forward").invoke();
                        var leftForce = Vector3.method("op_Multiply", 2).invoke(leftRightVector, 10.0);
                        rigidbody.method("AddForce", 2).invoke(leftForce, 2);
                    }
                    previousDash = rightPrimary;
                },
                toolTip: "Flings your character forwards when pressing A."
            }),
            new ButtonInfo({
                buttonText: "Iron Man",
                method: function () {
                    if (leftPrimary) {
                        var leftRightVector = leftHandTransform.method("get_right").invoke();
                        var leftForce = Vector3.method("op_Multiply", 2).invoke(leftRightVector, -15.0 * deltaTime);
                        rigidbody.method("AddForce", 2).invoke(leftForce, 2);
                    }
                    if (rightPrimary) {
                        var leftRightVector = rightHandTransform.method("get_right").invoke();
                        var leftForce = Vector3.method("op_Multiply", 2).invoke(leftRightVector, 15.0 * deltaTime);
                        rigidbody.method("AddForce", 2).invoke(leftForce, 2);
                    }
                },
                toolTip: "Turns you into iron man. Use A and X to fly."
            }),
            new ButtonInfo({
                buttonText: "Noclip",
                method: function () {
                    if (rightTrigger && !previousNoclipKey) {
                        toggleColliders(false);
                    }
                    if (!rightTrigger && previousNoclipKey) {
                        toggleColliders(true);
                    }
                    previousNoclipKey = rightTrigger;
                },
                toolTip: "Lets you clip through objects while holding right trigger."
            }),
            new ButtonInfo({
                buttonText: "Legit Long Arms",
                method: function () {
                    getTransform(GorillaTagger).method("set_localScale").invoke([1.08, 1.08, 1.08]);
                },
                disableMethod: function () {
                    getTransform(GorillaTagger).method("set_localScale").invoke(oneVector);
                },
                toolTip: "Gives you Slightly longer arms."
            }),
            new ButtonInfo({
                buttonText: "Long Arms",
                method: function () {
                    getTransform(GorillaTagger).method("set_localScale").invoke([1.25, 1.25, 1.25]);
                },
                disableMethod: function () {
                    getTransform(GorillaTagger).method("set_localScale").invoke(oneVector);
                },
                toolTip: "Gives you longer arms."
            }),
            new ButtonInfo({
                buttonText: "Speed Boost",
                method: function () {
                    GTPlayer.field("maxJumpSpeed").value = 9.0;
                    GTPlayer.method("set_jumpMultiplier").invoke(1.5);
                },
                toolTip: "Gives you a speed boost."
            }),
            new ButtonInfo({
                buttonText: "Slide Control",
                enableMethod: function () {
                    oldSlide = GTPlayer.field("slideControl").value;
                    GTPlayer.field("slideControl").value = 1;
                },
                disableMethod: function () { return GTPlayer.field("slideControl").value = oldSlide; },
                toolTip: "Lets you control yourself on ice perfectly."
            }),
            new ButtonInfo({
                buttonText: "Predictions",
                enableMethod: function () {
                    lvT = createObject(zeroVector, identityQuaternion, zeroVector, 0, [0.0, 0.0, 0.0, 0.0]);
                    Destroy(getComponent(lvT, BoxCollider));
                    addComponent(lvT, GorillaVelocityTracker);
                    rvT = createObject(zeroVector, identityQuaternion, zeroVector, 0, [0.0, 0.0, 0.0, 0.0]);
                    Destroy(getComponent(rvT, BoxCollider));
                    addComponent(rvT, GorillaVelocityTracker);
                },
                method: function () {
                    var predCount = 0.02;
                    getTransform(lvT).method("set_position").invoke(Vector3.method("op_Subtraction", 2).invoke(getTransform(headCollider).method("get_position").invoke(), leftHandTransform.method("get_position").invoke()));
                    getTransform(rvT).method("set_position").invoke(Vector3.method("op_Subtraction", 2).invoke(getTransform(headCollider).method("get_position").invoke(), rightHandTransform.method("get_position").invoke()));
                    var leftHandPosition = leftHandTransform.method("get_position").invoke();
                    var rightHandPosition = rightHandTransform.method("get_position").invoke();
                    var leftHandVelocity = getComponent(lvT, GorillaVelocityTracker).method("GetAverageVelocity").invoke(true, 0.0, false);
                    var rightHandVelocity = getComponent(rvT, GorillaVelocityTracker).method("GetAverageVelocity").invoke(true, 0.0, false);
                    leftHandVelocity = Vector3.method("op_Multiply", 2).invoke(leftHandVelocity, predCount);
                    rightHandVelocity = Vector3.method("op_Multiply", 2).invoke(rightHandVelocity, predCount);
                    leftHandPosition = Vector3.method("op_Subtraction", 2).invoke(leftHandPosition, leftHandVelocity);
                    rightHandPosition = Vector3.method("op_Subtraction", 2).invoke(rightHandPosition, rightHandVelocity);
                    leftHandTransform.method("set_position").invoke(leftHandPosition);
                    rightHandTransform.method("set_position").invoke(rightHandPosition);
                },
                disableMethod: function () {
                    Destroy(lvT);
                    Destroy(rvT);
                },
                toolTip: "Gives your controllers higher predictions."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Fun Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Spawn Hoverboard",
                method: function () {
                    GTPlayer.method("SetHoverAllowed").invoke(true, true);
                    FreeHoverboardManager.method("SendDropBoardRPC").invoke(rightHandTransform.method("get_position").invoke(), identityQuaternion, zeroVector, zeroVector, bgColor);
                },
                isTogglable: false,
                toolTip: "Spawns you in a hoverboard."
            }),
            new ButtonInfo({
                buttonText: "Become Goldentrophy",
                method: function () {
                    setPlayerName("goldentrophy");
                    setPlayerColor([1.0, 0.5, 0.0]);
                },
                isTogglable: false,
                toolTip: "Turns you into goldentrophy."
            }),
            new ButtonInfo({
                buttonText: "Water Splash Hands",
                method: function () {
                    if (leftGrab && time > splashDelay) {
                        splashDelay = time + 0.1;
                        var objectArray = Il2Cpp.array(SystemObject, [leftHandTransform.method("get_position").invoke(), leftHandTransform.method("get_rotation").invoke(), 1.0, 0.5, true, false]);
                        var method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload("System.String", "Photon.Pun.RpcTarget", "System.Object[]");
                        method.invoke(Il2Cpp.string("RPC_PlaySplashEffect"), 0, objectArray);
                    }
                    if (rightGrab && time > splashDelay) {
                        splashDelay = time + 0.1;
                        var objectArray = Il2Cpp.array(SystemObject, [rightHandTransform.method("get_position").invoke(), rightHandTransform.method("get_rotation").invoke(), 1.0, 0.5, true, false]);
                        var method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload("System.String", "Photon.Pun.RpcTarget", "System.Object[]");
                        method.invoke(Il2Cpp.string("RPC_PlaySplashEffect"), 0, objectArray);
                    }
                },
                toolTip: "Splashes water on your hands when pressing your grips."
            }),
            new ButtonInfo({
                buttonText: "Get ID Gun",
                method: function () {
                    if (rightGrab) {
                        var gunData = renderGun();
                        var ray = gunData.ray;
                        if (rightTrigger) {
                            var gunTarget = getComponentInParent(ray.method("get_collider").invoke(), VRRig);
                            if (gunTarget && !gunTarget.handle.isNull() && time > idGunDelay) {
                                if (!playerIsLocal(gunTarget)) {
                                    idGunDelay = time + 0.5;
                                    var id = gunTarget.method("get_Creator").invoke().method("get_UserId").invoke();
                                    sendNotification("ID: " + String(id));
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Logs the ID of whoever your hand desires."
            }),
            new ButtonInfo({
                buttonText: "Get Platform Gun",
                method: function () {
                    if (rightGrab) {
                        var gunData = renderGun();
                        var ray = gunData.ray;
                        if (rightTrigger) {
                            var gunTarget = getComponentInParent(ray.method("get_collider").invoke(), VRRig);
                            if (gunTarget && !gunTarget.handle.isNull() && time > idGunDelay) {
                                if (!playerIsLocal(gunTarget)) {
                                    idGunDelay = time + 0.5;
                                    var player = gunTarget.method("get_Creator").invoke();
                                    var concat = String(gunTarget.field("concatStringOfCosmeticsAllowed").value);
                                    var isSteam = (concat.includes("S. FIRST LOGIN") || concat.includes("FIRST LOGIN")) && !concat.includes("LMAKT.");
                                    sendNotification(isSteam ? "PLATFORM: Steam" : "PLATFORM: Meta");
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Logs the platform of whoever your hand desires."
            }),
            new ButtonInfo({
                buttonText: "Punch Mod",
                method: function () {
                    // This is MORE optimized (BY A LOT) than the one in the steam menu.
                    var vrrigs = GorillaParent.field("vrrigs").value;
                    var vrrigtotal = vrrigs.method("get_Count").invoke();
                    var index = 0;
                    for (var i = 0; i < vrrigtotal; i++) {
                        var vrrig = vrrigs.method("get_Item").invoke(i);
                        index++;
                        var they = vrrig.field("rightHandTransform").value.method("get_position").invoke();
                        var notthem = getTransform(headCollider).method("get_position").invoke();
                        var distance = Vector3.method("Distance").invoke(they, notthem);
                        if (distance < 0.25) {
                            var vel = Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Multiply").invoke(Vector3.method("Normalize").invoke(Vector3.method("op_Subtraction", 2).invoke(they, punchLastRight[index])), highPunchPower ? 10 : 5), rigidbody.method("get_velocity").invoke());
                            rigidbody.method("set_velocity").invoke(vel);
                        }
                        punchLastRight[index] = they;
                        they = vrrig.field("leftHandTransform").value.method("get_position").invoke();
                        distance = Vector3.method("Distance").invoke(they, notthem);
                        if (distance < 0.25) {
                            var vel = Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Multiply").invoke(Vector3.method("Normalize").invoke(Vector3.method("op_Subtraction", 2).invoke(they, punchLastLeft[index])), highPunchPower ? 10 : 5), rigidbody.method("get_velocity").invoke());
                            rigidbody.method("set_velocity").invoke(vel);
                        }
                        punchLastLeft[index] = they;
                    }
                },
                toolTip: "Lets people punch you across the map."
            }),
            new ButtonInfo({
                buttonText: "Max Quest Score",
                method: function () {
                    var _a;
                    (_a = LocalRig.method("SetQuestScore")) === null || _a === void 0 ? void 0 : _a.invoke(999999);
                },
                isTogglable: false,
                toolTip: "Sets Your Quest Score To Max"
            }),
            new ButtonInfo({
                buttonText: "Max Ranked Level",
                method: function () {
                    var _a;
                    (_a = LocalRig.method("SetRankedInfo", 4)) === null || _a === void 0 ? void 0 : _a.invoke(4000.0, 7, 7, true);
                },
                isTogglable: false,
                toolTip: "Sets Your Ranked Level To Max"
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Advantage Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Hand Noclip",
                method: function () {
                    GTPlayer.field("leftHandHolding").value = true;
                    GTPlayer.field("rightHandHolding").value = true;
                },
                disableMethod: function () {
                    GTPlayer.field("leftHandHolding").value = false;
                    GTPlayer.field("rightHandHolding").value = false;
                },
                toolTip: "Disables hand collisions."
            }),
            new ButtonInfo({
                buttonText: "Tag Gun",
                method: function () {
                    if (rightGrab) {
                        var gunData = renderGun();
                        var ray = gunData.ray;
                        if (rightTrigger) {
                            var gunTarget = getComponentInParent(ray.method("get_collider").invoke(), VRRig);
                            if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay) {
                                if (!playerIsLocal(gunTarget)) {
                                    tagGunDelay = time + 0.5;
                                    LocalRig.method("set_enabled").invoke(false);
                                    getTransform(LocalRig).method("set_position").invoke(getTransform(gunTarget).method("get_position").invoke());
                                    serialize();
                                    GameMode.method("ReportTag").invoke(gunTarget.method("get_Creator").invoke());
                                    LocalRig.method("set_enabled").invoke(true);
                                    sendAllOutgoing();
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Tags whoever your hand desires."
            }),
            new ButtonInfo({
                buttonText: "Tag All",
                isTogglable: false,
                method: function () {
                    var vrrigs = GorillaParent.field("vrrigs").value;
                    var vrrigtotal = vrrigs.method("get_Count").invoke();
                    for (var i = 0; i < vrrigtotal; i++) {
                        var playerRig = vrrigs.method("get_Item").invoke(i);
                        if (!playerIsLocal(playerRig)) {
                            LocalRig.method("set_enabled").invoke(false);
                            getTransform(LocalRig).method("set_position").invoke(getTransform(playerRig).method("get_position").invoke());
                            serialize();
                            GameMode.method("ReportTag").invoke(playerRig.method("get_Creator").invoke());
                            LocalRig.method("set_enabled").invoke(true);
                            sendAllOutgoing();
                        }
                    }
                },
                toolTip: "Tags everyone"
            }),
            new ButtonInfo({
                buttonText: "72 FPS",
                method: function () {
                    var targetDelta = 1 / 72;
                    var elapsed = Time.method("get_realtimeSinceStartup").invoke() - lastTime;
                    if (elapsed < targetDelta) {
                        var sleepMs = Math.floor((targetDelta - elapsed) * 1000);
                        if (sleepMs > 0)
                            Thread.method("Sleep").invoke(sleepMs);
                    }
                    lastTime = Time.method("get_realtimeSinceStartup").invoke();
                },
                isTogglable: true,
                toolTip: "Caps your FPS at 72 frames per second."
            }),
            new ButtonInfo({
                buttonText: "60 FPS",
                method: function () {
                    var targetDelta = 1 / 60;
                    var elapsed = Time.method("get_realtimeSinceStartup").invoke() - lastTime;
                    if (elapsed < targetDelta) {
                        var sleepMs = Math.floor((targetDelta - elapsed) * 1000);
                        if (sleepMs > 0)
                            Thread.method("Sleep").invoke(sleepMs);
                    }
                    lastTime = Time.method("get_realtimeSinceStartup").invoke();
                },
                isTogglable: true,
                toolTip: "Caps your FPS at 60 frames per second."
            }),
            new ButtonInfo({
                buttonText: "45 FPS",
                method: function () {
                    var targetDelta = 1 / 45;
                    var elapsed = Time.method("get_realtimeSinceStartup").invoke() - lastTime;
                    if (elapsed < targetDelta) {
                        var sleepMs = Math.floor((targetDelta - elapsed) * 1000);
                        if (sleepMs > 0)
                            Thread.method("Sleep").invoke(sleepMs);
                    }
                    lastTime = Time.method("get_realtimeSinceStartup").invoke();
                },
                isTogglable: true,
                toolTip: "Caps your FPS at 45 frames per second."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Rig Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Disable Wind",
                enableMethod: function () {
                    getObject("Environment Objects/LocalObjects_Prefab/Forest/Environment/Forest_ForceVolumes/").method("SetActive").invoke(false);
                },
                disableMethod: function () {
                    getObject("Environment Objects/LocalObjects_Prefab/Forest/Environment/Forest_ForceVolumes/").method("SetActive").invoke(true);
                },
                toolTip: "Freezes your rig when pressing A."
            }),
            new ButtonInfo({
                buttonText: "Ghost",
                method: function () {
                    if (rightPrimary && !previousGhostKey) {
                        LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
                    }
                    previousGhostKey = rightPrimary;
                },
                toolTip: "Freezes your rig when pressing A."
            }),
            new ButtonInfo({
                buttonText: "Invisible",
                method: function () {
                    if (rightSecondary && !previousInvisKey) {
                        LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
                    }
                    if (!LocalRig.method("get_enabled").invoke()) {
                        getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
                    }
                    previousInvisKey = rightSecondary;
                },
                toolTip: "Turns you invisible when pressing B."
            }),
            new ButtonInfo({
                buttonText: "Rig Gun",
                disableMethod: function () {
                    LocalRig.method("set_enabled").invoke(true);
                },
                method: function () {
                    if (rightGrab) {
                        var gunData = renderGun();
                        var gunPointer = gunData.gunPointer;
                        if (rightTrigger) {
                            LocalRig.method("set_enabled").invoke(false);
                            var position = Vector3.method("op_Addition", 2).invoke([0, 1, 0], getTransform(gunPointer).method("get_position").invoke());
                            getTransform(LocalRig).method("set_position").invoke(position);
                        }
                        else {
                            LocalRig.method("set_enabled").invoke(true);
                        }
                    }
                },
                toolTip: "Moves your rig to wherever your hand desires."
            }),
            new ButtonInfo({
                buttonText: "Grab Rig",
                disableMethod: function () { LocalRig.method("set_enabled").invoke(true); },
                method: function () {
                    if (rightGrab) {
                        LocalRig.method("set_enabled").invoke(false);
                        getTransform(LocalRig).method("set_position").invoke(rightHandTransform.method("get_position").invoke());
                        getTransform(LocalRig).method("set_rotation").invoke(rightHandTransform.method("get_rotation").invoke());
                    }
                    else {
                        LocalRig.method("set_enabled").invoke(true);
                    }
                    if (leftGrab) {
                        LocalRig.method("set_enabled").invoke(false);
                        getTransform(LocalRig).method("set_position").invoke(leftHandTransform.method("get_position").invoke());
                        getTransform(LocalRig).method("set_rotation").invoke(leftHandTransform.method("get_rotation").invoke());
                    }
                    else {
                        LocalRig.method("set_enabled").invoke(true);
                    }
                },
                isTogglable: true,
                toolTip: "Lets you grab your rig"
            }),
            new ButtonInfo({
                buttonText: "Spaz Rig",
                method: function () {
                    var trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
                    trackingRotationOffset.field("x").value = Math.random() * 360.0;
                    trackingRotationOffset.field("y").value = Math.random() * 360.0;
                    trackingRotationOffset.field("z").value = Math.random() * 360.0;
                },
                disableMethod: function () {
                    var trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
                    trackingRotationOffset.field("x").value = 0.0;
                    trackingRotationOffset.field("y").value = 0.0;
                    trackingRotationOffset.field("z").value = 0.0;
                },
                toolTip: "Spazzes your rig out."
            }),
            new ButtonInfo({
                buttonText: "Spin Head X",
                method: function () {
                    var trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
                    trackingRotationOffset.field("x").value += 15.0;
                },
                disableMethod: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("x").value = 0.0;
                },
                toolTip: "Rotate head around the X axis."
            }),
            new ButtonInfo({
                buttonText: "Spin Head Y",
                method: function () {
                    var trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
                    trackingRotationOffset.field("y").value += 15.0;
                },
                disableMethod: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 0.0;
                },
                toolTip: "Rotate head around the Y axis."
            }),
            new ButtonInfo({
                buttonText: "Spin Head Z",
                method: function () {
                    var trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
                    trackingRotationOffset.field("z").value += 15.0;
                },
                disableMethod: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 0.0;
                },
                toolTip: "Rotate head around the Z axis."
            }),
            new ButtonInfo({
                buttonText: "Upside Down Head",
                method: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 180.0;
                },
                disableMethod: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 0.0;
                },
                toolTip: "Flip your head upside down."
            }),
            new ButtonInfo({
                buttonText: "Broken Neck",
                method: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 90.0;
                },
                disableMethod: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("z").value = 0.0;
                },
                toolTip: "Tilt your head sideways."
            }),
            new ButtonInfo({
                buttonText: "Backwards Head",
                method: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 180.0;
                },
                disableMethod: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 0.0;
                },
                toolTip: "Turn your head backwards."
            }),
            new ButtonInfo({
                buttonText: "Sideways Head",
                method: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 90.0;
                },
                disableMethod: function () {
                    LocalRig.field("head").value.field("trackingRotationOffset").value.field("y").value = 0.0;
                },
                toolTip: "Rotate your head sideways."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Misc Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Connect to US",
                method: function () {
                    PhotonNetwork.method("ConnectToRegion").invoke(Il2Cpp.string("us"));
                },
                isTogglable: false,
                toolTip: "Connects you to the US region."
            }),
            new ButtonInfo({
                buttonText: "Connect to US West",
                method: function () {
                    PhotonNetwork.method("ConnectToRegion").invoke(Il2Cpp.string("usw"));
                },
                isTogglable: false,
                toolTip: "Connects you to the USW rwgion."
            }),
            new ButtonInfo({
                buttonText: "Connect to EU",
                method: function () {
                    PhotonNetwork.method("ConnectToRegion").invoke(Il2Cpp.string("eu"));
                },
                isTogglable: false,
                toolTip: "Connects you to the EU region."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Visual Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Cosmetic Tracers",
                disableMethod: function () {
                    for (var _i = 0, linePool_3 = linePool; _i < linePool_3.length; _i++) {
                        var line = linePool_3[_i];
                        line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                method: function () {
                    if (frameCount % 5 != 0) {
                        for (var _i = 0, linePool_4 = linePool; _i < linePool_4.length; _i++) {
                            var line = linePool_4[_i];
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        var rigs = [];
                        var cosmeticRigs = [];
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            rigs.push(playerRig);
                            if (playerIsLocal(playerRig))
                                continue;
                            var concat = String(playerRig.field("concatStringOfCosmeticsAllowed").value);
                            if (concat.includes("LBAAD.")) {
                                cosmeticRigs.push(i);
                                continue;
                            }
                            ; // Admin
                            if (concat.includes("LBAAK.")) {
                                cosmeticRigs.push(i);
                                continue;
                            }
                            ; // Stick
                            if (concat.includes("LMAPY.")) {
                                cosmeticRigs.push(i);
                                continue;
                            }
                            ; // Forest Guide
                            if (concat.includes("LBAGS.")) {
                                cosmeticRigs.push(i);
                                continue;
                            }
                            ; // Illustrator
                            if (concat.includes("LBADE.")) {
                                cosmeticRigs.push(i);
                                continue;
                            }
                            ; // Finger Painter
                            if (concat.includes("LBANI.")) {
                                cosmeticRigs.push(i);
                                continue;
                            }
                            ; // AA Creator
                        }
                        for (var i = 0; i < vrrigtotal; i++) {
                            if (cosmeticRigs.includes(i) == false)
                                continue;
                            var playerRig = rigs[i];
                            if (!playerIsLocal(playerRig)) {
                                var color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                var finalRender = null;
                                var nl = false;
                                for (var _a = 0, linePool_5 = linePool; _a < linePool_5.length; _a++) {
                                    var line = linePool_5[_a];
                                    if (finalRender != null)
                                        continue;
                                    if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
                                        line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    var lineHolder = GameObject.new("LineObject");
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    var newLine = addComponent(lineHolder, LineRenderer);
                                    var shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
                                    newLine.method("get_material").invoke().method("set_shader").invoke(shader);
                                    newLine.method("set_startWidth").invoke(0.025);
                                    newLine.method("set_endWidth").invoke(0.025);
                                    newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                    newLine.method("set_useWorldSpace").invoke(true);
                                    newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
                                    linePool.push(newLine);
                                    finalRender = newLine;
                                }
                                finalRender.method("set_startColor").invoke(color);
                                finalRender.method("set_endColor").invoke(color);
                                finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
                                finalRender.method("SetPosition").invoke(0, rightHandTransform.method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts tracers on your right hand. Only shows players with rare cosmetics."
            }),
            new ButtonInfo({
                buttonText: "Casual Tracers",
                disableMethod: function () {
                    for (var _i = 0, linePool_6 = linePool; _i < linePool_6.length; _i++) {
                        var line = linePool_6[_i];
                        line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                method: function () {
                    if (frameCount % 3 == 0) {
                        for (var _i = 0, linePool_7 = linePool; _i < linePool_7.length; _i++) {
                            var line = linePool_7[_i];
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        var rhp = rightHandTransform.method("get_position").invoke();
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            if (!playerIsLocal(playerRig)) {
                                var color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                var finalRender = null;
                                var nl = false;
                                for (var _a = 0, linePool_8 = linePool; _a < linePool_8.length; _a++) {
                                    var line = linePool_8[_a];
                                    if (finalRender != null)
                                        continue;
                                    var lineObj = line.method("get_gameObject").invoke();
                                    if (lineObj.method("get_activeInHierarchy").invoke() == false) {
                                        lineObj.method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    var lineHolder = GameObject.new("LineObject");
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    var newLine = addComponent(lineHolder, LineRenderer);
                                    var shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
                                    newLine.method("get_material").invoke().method("set_shader").invoke(shader);
                                    newLine.method("set_startWidth").invoke(0.025);
                                    newLine.method("set_endWidth").invoke(0.025);
                                    newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                    newLine.method("set_useWorldSpace").invoke(true);
                                    newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
                                    linePool.push(newLine);
                                    finalRender = newLine;
                                }
                                finalRender.method("set_startColor").invoke(color);
                                finalRender.method("set_endColor").invoke(color);
                                finalRender.method("SetPosition").invoke(0, rhp);
                                if (frameCount % 6 == 0)
                                    finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts tracers on your right hand. Shows everyone."
            }),
            new ButtonInfo({
                buttonText: "Nearest Tracer",
                disableMethod: function () {
                    for (var _i = 0, linePool_9 = linePool; _i < linePool_9.length; _i++) {
                        var line = linePool_9[_i];
                        line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                    }
                },
                method: function () {
                    if (frameCount % 5 != 0) {
                        var lowestDistance = Number.MAX_SAFE_INTEGER;
                        var closest = 0;
                        for (var _i = 0, linePool_10 = linePool; _i < linePool_10.length; _i++) {
                            var line = linePool_10[_i];
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        var rigs = [];
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            rigs.push(playerRig);
                            if (playerIsLocal(playerRig))
                                continue;
                            var dist = Vector3.method("Distance").invoke(getTransform(headCollider).method("get_position").invoke(), getTransform(playerRig).method("get_position").invoke());
                            if (lowestDistance > dist) {
                                lowestDistance = dist;
                                closest = i;
                            }
                        }
                        for (var i = 0; i < vrrigtotal; i++) {
                            if (i != closest)
                                continue;
                            var playerRig = rigs[i];
                            if (!playerIsLocal(playerRig)) {
                                var color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                var finalRender = null;
                                var nl = false;
                                for (var _a = 0, linePool_11 = linePool; _a < linePool_11.length; _a++) {
                                    var line = linePool_11[_a];
                                    if (finalRender != null)
                                        continue;
                                    if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false) {
                                        line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    var lineHolder = GameObject.new("LineObject");
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    var newLine = addComponent(lineHolder, LineRenderer);
                                    var shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
                                    newLine.method("get_material").invoke().method("set_shader").invoke(shader);
                                    newLine.method("set_startWidth").invoke(0.025);
                                    newLine.method("set_endWidth").invoke(0.025);
                                    newLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
                                    newLine.method("set_useWorldSpace").invoke(true);
                                    newLine.method("get_gameObject").invoke().method("set_layer").invoke(lineRenderHolder.method("get_layer").invoke());
                                    linePool.push(newLine);
                                    finalRender = newLine;
                                }
                                finalRender.method("set_startColor").invoke(color);
                                finalRender.method("set_endColor").invoke(color);
                                finalRender.method("SetPosition").invoke(1, getTransform(playerRig).method("get_position").invoke());
                                finalRender.method("SetPosition").invoke(0, rightHandTransform.method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts tracers on your right hand. Shows only the nearest player to reduce lag."
            }),
            new ButtonInfo({
                buttonText: "Casual Cube ESP",
                disableMethod: function () {
                    for (var _i = 0, linePool_12 = linePool; _i < linePool_12.length; _i++) {
                        var line = linePool_12[_i];
                        Destroy(line.method("get_gameObject").invoke());
                    }
                    linePool = [];
                },
                method: function () {
                    if (frameCount % 3 == 0) {
                        for (var _i = 0, linePool_13 = linePool; _i < linePool_13.length; _i++) {
                            var line = linePool_13[_i];
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        var rhp = rightHandTransform.method("get_position").invoke();
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            if (!playerIsLocal(playerRig)) {
                                var color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                var finalRender = null;
                                var nl = false;
                                for (var _a = 0, linePool_14 = linePool; _a < linePool_14.length; _a++) {
                                    var line = linePool_14[_a];
                                    if (finalRender != null)
                                        continue;
                                    var lineObj = line;
                                    if (lineObj.method("get_activeInHierarchy").invoke() == false) {
                                        lineObj.method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    var lineHolder = GameObject.method("CreatePrimitive").invoke(3);
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    Destroy(getComponent(lineHolder, BoxCollider));
                                    getTransform(lineHolder).method("set_localScale").invoke([0.2, 0.2, 0.2]);
                                    var shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
                                    getComponent(lineHolder, Renderer).method("get_material").invoke().method("set_shader").invoke(shader);
                                    if (!espCollide)
                                        Destroy(getComponent(lineHolder, BoxCollider));
                                    linePool.push(lineHolder);
                                    finalRender = lineHolder;
                                }
                                getComponent(finalRender, Renderer).method("get_material").invoke().method("set_color").invoke(color);
                                getTransform(finalRender).method("set_position").invoke(getTransform(playerRig).method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts cubes on everyone."
            }),
            new ButtonInfo({
                buttonText: "Casual Cuboid ESP",
                disableMethod: function () {
                    for (var _i = 0, linePool_15 = linePool; _i < linePool_15.length; _i++) {
                        var line = linePool_15[_i];
                        Destroy(line.method("get_gameObject").invoke());
                    }
                    linePool = [];
                },
                method: function () {
                    if (frameCount % 3 == 0) {
                        for (var _i = 0, linePool_16 = linePool; _i < linePool_16.length; _i++) {
                            var line = linePool_16[_i];
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        var rhp = rightHandTransform.method("get_position").invoke();
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            if (!playerIsLocal(playerRig)) {
                                var color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                var finalRender = null;
                                var nl = false;
                                for (var _a = 0, linePool_17 = linePool; _a < linePool_17.length; _a++) {
                                    var line = linePool_17[_a];
                                    if (finalRender != null)
                                        continue;
                                    var lineObj = line;
                                    if (lineObj.method("get_activeInHierarchy").invoke() == false) {
                                        lineObj.method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    var lineHolder = GameObject.method("CreatePrimitive").invoke(3);
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    Destroy(getComponent(lineHolder, BoxCollider));
                                    getTransform(lineHolder).method("set_localScale").invoke([0.2, 0.4, 0.2]);
                                    var shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
                                    getComponent(lineHolder, Renderer).method("get_material").invoke().method("set_shader").invoke(shader);
                                    if (!espCollide)
                                        Destroy(getComponent(lineHolder, BoxCollider));
                                    linePool.push(lineHolder);
                                    finalRender = lineHolder;
                                }
                                getComponent(finalRender, Renderer).method("get_material").invoke().method("set_color").invoke(color);
                                getTransform(finalRender).method("set_position").invoke(getTransform(playerRig).method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts cuboids on everyone."
            }),
            new ButtonInfo({
                buttonText: "Casual Sphere ESP",
                disableMethod: function () {
                    for (var _i = 0, linePool_18 = linePool; _i < linePool_18.length; _i++) {
                        var line = linePool_18[_i];
                        Destroy(line.method("get_gameObject").invoke());
                    }
                    linePool = [];
                },
                method: function () {
                    if (frameCount % 3 == 0) {
                        for (var _i = 0, linePool_19 = linePool; _i < linePool_19.length; _i++) {
                            var line = linePool_19[_i];
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        var rhp = rightHandTransform.method("get_position").invoke();
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            if (!playerIsLocal(playerRig)) {
                                var color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                var finalRender = null;
                                var nl = false;
                                for (var _a = 0, linePool_20 = linePool; _a < linePool_20.length; _a++) {
                                    var line = linePool_20[_a];
                                    if (finalRender != null)
                                        continue;
                                    var lineObj = line;
                                    if (lineObj.method("get_activeInHierarchy").invoke() == false) {
                                        lineObj.method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    var lineHolder = GameObject.method("CreatePrimitive").invoke(0);
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    Destroy(getComponent(lineHolder, BoxCollider));
                                    getTransform(lineHolder).method("set_localScale").invoke([0.2, 0.2, 0.2]);
                                    var shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
                                    getComponent(lineHolder, Renderer).method("get_material").invoke().method("set_shader").invoke(shader);
                                    if (!espCollide)
                                        Destroy(getComponent(lineHolder, SphereCollider));
                                    linePool.push(lineHolder);
                                    finalRender = lineHolder;
                                }
                                getComponent(finalRender, Renderer).method("get_material").invoke().method("set_color").invoke(color);
                                getTransform(finalRender).method("set_position").invoke(getTransform(playerRig).method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts spheres on everyone."
            }),
            new ButtonInfo({
                buttonText: "Casual Capsule ESP",
                disableMethod: function () {
                    for (var _i = 0, linePool_21 = linePool; _i < linePool_21.length; _i++) {
                        var line = linePool_21[_i];
                        Destroy(line.method("get_gameObject").invoke());
                    }
                    linePool = [];
                },
                method: function () {
                    if (frameCount % 3 == 0) {
                        for (var _i = 0, linePool_22 = linePool; _i < linePool_22.length; _i++) {
                            var line = linePool_22[_i];
                            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
                        }
                        var rhp = rightHandTransform.method("get_position").invoke();
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            if (!playerIsLocal(playerRig)) {
                                var color = playerRig.field("playerColor").value;
                                if (lineRenderHolder == null) {
                                    lineRenderHolder = GameObject.new("LineRender_Holder");
                                }
                                var finalRender = null;
                                var nl = false;
                                for (var _a = 0, linePool_23 = linePool; _a < linePool_23.length; _a++) {
                                    var line = linePool_23[_a];
                                    if (finalRender != null)
                                        continue;
                                    var lineObj = line;
                                    if (lineObj.method("get_activeInHierarchy").invoke() == false) {
                                        lineObj.method("SetActive").invoke(true);
                                        finalRender = line;
                                        break;
                                    }
                                }
                                if (finalRender == null) {
                                    nl = true;
                                    var lineHolder = GameObject.method("CreatePrimitive").invoke(1);
                                    getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                                    Destroy(getComponent(lineHolder, BoxCollider));
                                    getTransform(lineHolder).method("set_localScale").invoke([0.27, 0.4, 0.27]);
                                    var shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
                                    getComponent(lineHolder, Renderer).method("get_material").invoke().method("set_shader").invoke(shader);
                                    if (!espCollide)
                                        Destroy(getComponent(lineHolder, CapsuleCollider));
                                    linePool.push(lineHolder);
                                    finalRender = lineHolder;
                                }
                                getComponent(finalRender, Renderer).method("get_material").invoke().method("set_color").invoke(color);
                                getTransform(finalRender).method("set_position").invoke(getTransform(playerRig).method("get_position").invoke());
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Puts capsules on everyone."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Overpowered Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Lag Gun",
                method: function () {
                    if (rightGrab) {
                        var gunData = renderGun();
                        var ray = gunData.ray;
                        if (rightTrigger) {
                            var gunTarget = getComponentInParent(ray.method("get_collider").invoke(), VRRig);
                            if (gunTarget && !gunTarget.handle.isNull() && time > lagGunDelay) {
                                if (!playerIsLocal(gunTarget)) {
                                    lagGunDelay = time + 2;
                                    var plRef = gunTarget.method("get_Creator").invoke().method("get_ActorNumber" /*GetPlayerRef"*/).invoke();
                                    var arr = Il2Cpp.array(SystemObject, 0);
                                    var rpc = FriendshipGroupDetection.field("photonView").value.method("RPC");
                                    for (var i = 0; i < 425; i++) {
                                        rpc.invoke(Il2Cpp.string("NotifyPartyMerging"), plRef, arr);
                                    }
                                    sendAllOutgoing();
                                }
                            }
                        }
                    }
                },
                isTogglable: true,
                toolTip: "Lags whoever your hand desires. May be broken."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Safety Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
            new ButtonInfo({
                buttonText: "Anti Moderator",
                isTogglable: true,
                method: function () {
                    if (frameCount % 5 != 0) {
                        var vrrigs = GorillaParent.field("vrrigs").value;
                        var vrrigtotal = vrrigs.method("get_Count").invoke();
                        var shouldLeave = false;
                        for (var i = 0; i < vrrigtotal; i++) {
                            var playerRig = vrrigs.method("get_Item").invoke(i);
                            if (playerIsLocal(playerRig))
                                continue;
                            var concat = String(playerRig.field("concatStringOfCosmeticsAllowed").value);
                            if (concat.includes("LBAAD.")) {
                                shouldLeave = true;
                                break;
                            }
                            ; // Admin
                            if (concat.includes("LBAAK.")) {
                                shouldLeave = true;
                                break;
                            }
                            ; // Stick
                            if (concat.includes("LMAPY.")) {
                                shouldLeave = true;
                                break;
                            }
                            ; // Forest Guide
                        }
                        if (shouldLeave == true) {
                            var room = "";
                            try {
                                room = String(PhotonNetwork.method("get_CurrentRoom").invoke().method("get_Name").invoke());
                            }
                            finally {
                                NetworkSystem.method("ReturnToSinglePlayer").invoke();
                            }
                            for (var i = 0; i < 10; i++) {
                                console.log("Moderator in code " + room);
                            }
                            sendNotification("Moderator in code " + room, true, 20);
                        }
                    }
                },
                toolTip: "When someone with the stick joins, you get disconnected.",
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Favorite Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
        ],
        [
            new ButtonInfo({
                buttonText: "Exit Enabled Mods",
                method: function () {
                    currentCategory = 0;
                    currentPage = 0;
                },
                isTogglable: false,
                toolTip: "Returns you back to the main category."
            }),
        ]
    ];
    var buttonMap = new Map();
    buttons.flat().forEach(function (button) {
        buttonMap.set(button.buttonText, button);
    });
    function getIndex(buttonText) {
        return buttonMap.get(buttonText);
    }
    function getCategoryIndex(button) {
        var ret = null;
        buttons.forEach(function (category, categoryIndex) {
            category.forEach(function (categoryButton) {
                if (button == categoryButton) {
                    ret = categoryIndex;
                }
            });
        });
        return ret;
    }
    var ButtonActivation = GorillaReportButton.method("OnTriggerEnter");
    ButtonActivation.implementation = function (collider) {
        var _a, _b, _c;
        var rawName = this.method("get_name").invoke().toString();
        if (rawName.length > 1 && rawName[1] == "@") {
            if (collider.handle.equals(referenceCollider.handle)) {
                var goName = rawName.substring(2, rawName.length - 1);
                var _time = Time.method("get_time").invoke();
                if (_time > buttonClickDelay) {
                    buttonClickDelay = _time + 0.2;
                    var button = getIndex(goName);
                    playButtonSound();
                    if (button) {
                        if (leftGrab) {
                            toggleFavorite(button);
                            reloadMenu();
                        }
                        else {
                            if (button.isTogglable) {
                                button.enabled = !button.enabled;
                                reloadMenu();
                                if (button === null || button === void 0 ? void 0 : button.enabled) {
                                    if (button.toolTip && buttonNotifications)
                                        sendNotification("<color=grey>[</color><color=green>ENABLE</color><color=grey>]</color> " + button.toolTip, false);
                                    (_a = button.enableMethod) === null || _a === void 0 ? void 0 : _a.call(button);
                                }
                                else {
                                    if (button.toolTip && buttonNotifications)
                                        sendNotification("<color=grey>[</color><color=red>DISABLE</color><color=grey>]</color> " + button.toolTip, false);
                                    (_b = button === null || button === void 0 ? void 0 : button.disableMethod) === null || _b === void 0 ? void 0 : _b.call(button);
                                }
                            }
                            else {
                                reloadMenu();
                                if (button.toolTip && buttonNotifications)
                                    sendNotification("<color=grey>[</color><color=green>ENABLE</color><color=grey>]</color> " + button.toolTip, false);
                                (_c = button === null || button === void 0 ? void 0 : button.method) === null || _c === void 0 ? void 0 : _c.call(button);
                            }
                            if (getCategoryIndex(button) == 12 && !enabledRecent)
                                loadEnabled();
                        }
                    }
                }
            }
            return;
        }
        return this.method("OnTriggerEnter").invoke(collider);
    };
    var VRRigOnDisable = VRRig.method("OnDisable");
    VRRigOnDisable.implementation = function () {
        if (this.handle.equals(LocalRig.handle)) {
            return;
        }
        return this.method("OnDisable").invoke();
    };
    var SendReport = GorillaNot.method("SendReport");
    SendReport.implementation = function () {
        return;
    };
    // Custom boards
    {
        var boardIndex = 0;
        var forest = getTransform(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom"));
        var childCount = forest.method("get_childCount").invoke();
        for (var i = 0; i < childCount; i++) {
            var child = forest.method("GetChild").invoke(i);
            var gameObject = child.method("get_gameObject").invoke();
            if (gameObject.method("get_name").invoke().toString().includes("UnityTempFile")) {
                boardIndex++;
                if (boardIndex == 6) {
                    boardMaterial = Material.new();
                    Material.method("CreateWithShader").invoke(boardMaterial, UberShader);
                    getComponent(gameObject, Renderer).method("set_material").invoke(boardMaterial);
                    boardMaterial.method("set_color").invoke(bgColor);
                    break;
                }
            }
        }
        var modCount_1 = 0;
        buttons.forEach(function (category, categoryIndex) {
            if (categoryIndex == 12) {
                modCount_1 += 1;
            }
            else {
                modCount_1 += category.length;
            }
        });
        var motdTitle = getComponent(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom/motdHeadingText"), TextMeshPro);
        motdTitle.method("set_text").invoke(Il2Cpp.string("Thanks for using ii's Stupid Menu!"));
        var motdText = getComponent(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom/motdBodyText"), TextMeshPro);
        motdText.method("set_fontSize").invoke(100);
        motdText.method("set_text").invoke(Il2Cpp.string("You are currently using build ".concat(version, ". This menu was created by iiDk (@crimsoncauldron) on Discord. There are a total of <b>").concat(modCount_1, "</b> mods on this menu. This menu runs completely standalone. <color=red>I, iiDk, am not responsible for any bans using this menu.</color> If you get banned while using this, it's your responsibility.")));
    }
    var LateUpdate = GTPlayer.method("LateUpdate");
    LateUpdate.implementation = function () {
        leftPrimary = ControllerInputPoller.field("leftControllerPrimaryButton").value;
        leftSecondary = ControllerInputPoller.field("leftControllerSecondaryButton").value;
        rightPrimary = ControllerInputPoller.field("rightControllerPrimaryButton").value;
        rightSecondary = ControllerInputPoller.field("rightControllerSecondaryButton").value;
        leftGrab = ControllerInputPoller.field("leftGrab").value;
        rightGrab = ControllerInputPoller.field("rightGrab").value;
        leftTrigger = ControllerInputPoller.field("leftControllerIndexFloat").value > 0.5;
        rightTrigger = ControllerInputPoller.field("rightControllerIndexFloat").value > 0.5;
        deltaTime = Time.method("get_deltaTime").invoke();
        time = Time.method("get_time").invoke();
        frameCount++;
        if ((righthand && rightSecondary) || (!righthand && leftSecondary)) {
            if (currentNotification != "" && time > notifactionResetTime)
                reloadMenu();
            if (menu == null) {
                renderMenu();
            }
            else {
                recenterMenu();
            }
        }
        else {
            if (menu != null) {
                Destroy(menu);
                menu = null;
            }
        }
        if (menu == null) {
            if (reference != null) {
                Destroy(reference);
                reference = null;
            }
        }
        else {
            if (reference == null) {
                renderReference();
            }
        }
        try {
            if (GunPointer != null) {
                if (!(GunPointer.method("get_activeSelf").invoke())) {
                    Destroy(GunPointer);
                    GunPointer = null;
                }
                else
                    GunPointer.method("SetActive").invoke(false);
            }
            var lineObj = GunLine.method("get_gameObject").invoke();
            if (lineObj != null) {
                if (!(lineObj.method("get_activeSelf").invoke())) {
                    Destroy(lineObj);
                    GunLine = null;
                }
                else
                    lineObj.method("SetActive").invoke(false);
            }
        }
        catch (_a) { }
        buttons.flat()
            .filter(function (button) { return button.enabled; })
            .forEach(function (button) {
            if (button.method) {
                try {
                    button.method();
                }
                catch (error) {
                    console.error("Error executing method for button '".concat(button.buttonText || 'unnamed', "':"), error);
                    console.error('Error stack:', error.stack);
                    console.error('Button object:', button);
                    if (error.stack) {
                        var stackLines = error.stack.split('\n');
                        if (stackLines.length > 1) {
                            console.error('Error occurred at:', stackLines[1].trim());
                        }
                    }
                }
            }
        });
        return LateUpdate.invoke();
    };
    console.log("\n\n     \u2022\u2022\u2579   \u250F\u2513     \u2022 \u2513  \u2533\u2533\u2513      \n     \u2513\u2513 \u250F  \u2517\u2513\u254B\u2513\u250F\u250F\u2513\u2513\u250F\u252B  \u2503\u2503\u2503\u250F\u2513\u250F\u2513\u2513\u250F\n     \u2517\u2517 \u251B  \u2517\u251B\u2517\u2517\u253B\u2523\u251B\u2517\u2517\u253B  \u251B \u2517\u2517 \u251B\u2517\u2517\u253B\n                \u251B               \n    ii's Stupid Menu Quest ".concat(version, "\n    Compiled ").concat(new Date().toISOString(), "\n"));
});
