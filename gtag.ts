// ii's Quest Menu, by @goldentrophy / @crimsoncauldron
// Warning: Ugly code. I hate TypeScript.

declare const Il2Cpp: any;
declare const console: any;
declare const XRNode: any;

const version = "1.3.0";

let buttonClickDelay = 0.0;
let menu = null;
let reference = null;
let referenceCollider = null;

let leftPrimary = false;
let leftSecondary = false;

let rightPrimary = false;
let rightSecondary = false;

let leftGrab = false;
let rightGrab = false;

let leftTrigger = false;
let rightTrigger = false;

let deltaTime = 0.0;
let time = 0.0;
let frameCount = 0;

let previousGhostKey = false;
let previousInvisKey = false;
let previousNoclipKey = false;
let perviousTeleportKey = false;

let walkPos = null;
let walkNormal = null;

let closePosition = null;
let tagGunDelay = 0.0;
let idGunDelay = 0.0;
let splashDelay = 0.0;

let leftPlatform = null;
let rightPlatform = null;

let lineRenderHolder = null;
let isLineRenderQueued = false;
let linePool = [];

let lvT = null;
let rvT = null;

let buttonNotifications: boolean = true;

let bgColor: [number, number, number, number] = [1.0, 0.5, 0.0, 1.0];
let textColor: [number, number, number, number] = [1.0, 0.7450981, 0.4901961, 1.0];

let buttonColor: [number, number, number, number] = [0.666, 0.333, 0.0, 1.0];
let buttonPressedColor: [number, number, number, number] = [0.333, 0.150, 0.0, 1.0];

let menuName: string = "ii's <b>Stupid</b> Menu";
let themeIndex = 0;

let currentNotification: string = "";
let notifactionResetTime: number = 0;

Il2Cpp.perform(() => {
  const images = {
    "Assembly-CSharp": Il2Cpp.domain.assembly("Assembly-CSharp").image,
    "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,
    "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image,
    "UnityEngine.UIModule": Il2Cpp.domain.assembly("UnityEngine.UIModule").image,
    "UnityEngine.UI": Il2Cpp.domain.assembly("UnityEngine.UI").image,
    "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly("UnityEngine.TextRenderingModule").image,
    "PhotonUnityNetworking": Il2Cpp.domain.assembly("PhotonUnityNetworking").image,
    "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
  };

  const AssemblyCSharp = images["Assembly-CSharp"];
  const UnityEngineCore = images["UnityEngine.CoreModule"];
  const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
  const UnityEngineUI = images["UnityEngine.UI"];
  const UnityEngineUIModule = images["UnityEngine.UIModule"];
  const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
  const PhotonUnityNetworking = images["PhotonUnityNetworking"];
  const UnityTextMeshPro = images["Unity.TextMeshPro"];

  const ControllerInputPoller = AssemblyCSharp.class("ControllerInputPoller").field("instance").value;
  const GorillaTaggerClass = AssemblyCSharp.class("GorillaTagger");
  const GTPlayerClass = AssemblyCSharp.class("GorillaLocomotion.GTPlayer");
  const VRRig = AssemblyCSharp.class("VRRig");
  const GorillaNot = AssemblyCSharp.class("GorillaNot");
  const GorillaParentClass = AssemblyCSharp.class("GorillaParent");
  const NetworkSystemClass = AssemblyCSharp.class("NetworkSystem");
  const GorillaReportButton = AssemblyCSharp.class("GorillaReportButton");
  const FreeHoverboardManager = AssemblyCSharp.class("FreeHoverboardManager").method("get_instance").invoke();
  const GameMode = AssemblyCSharp.class("GorillaGameModes.GameMode");
  const GorillaVelocityTracker = AssemblyCSharp.class("GorillaLocomotion.Climbing.GorillaVelocityTracker");
  const PhotonNetwork = PhotonUnityNetworking.class("Photon.Pun.PhotonNetwork");
  const RpcTarget = PhotonUnityNetworking.class("Photon.Pun.RpcTarget");

  const GameObject = UnityEngineCore.class("UnityEngine.GameObject");
  const Object = UnityEngineCore.class("UnityEngine.Object");
  const SystemObject = Il2Cpp.corlib.class("System.Object");
  const Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
  const Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
  const Time = UnityEngineCore.class("UnityEngine.Time");
  const Resources = UnityEngineCore.class("UnityEngine.Resources");
  const Material = UnityEngineCore.class("UnityEngine.Material");
  const Renderer = UnityEngineCore.class("UnityEngine.Renderer");
  const Shader = UnityEngineCore.class("UnityEngine.Shader");
  const Color = UnityEngineCore.class("UnityEngine.Color");
  const RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
  const LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
  const PlayerPrefs = UnityEngineCore.class("UnityEngine.PlayerPrefs");

  const MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
  const BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
  const Collider = UnityEnginePhysics.class("UnityEngine.Collider");
  const Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
  const Physics = UnityEnginePhysics.class("UnityEngine.Physics");
  const Ray = UnityEngineCore.class("UnityEngine.Ray");
  const RaycastHit = UnityEnginePhysics.class("UnityEngine.RaycastHit");

  const Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
  const CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
  const GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
  const Text = UnityEngineUI.class("UnityEngine.UI.Text");
  const Font = UnityEngineTextRendering.class("UnityEngine.Font");

  const TextMeshPro = UnityTextMeshPro.class("TMPro.TextMeshPro");

  const GorillaTagger = GorillaTaggerClass.field("_instance").value;
  const GorillaParent = GorillaParentClass.field("instance").value;
  const NetworkSystem = NetworkSystemClass.field("Instance").value;
  const rigidbody = GorillaTagger.field("<rigidbody>k__BackingField").value;

  const LocalRig = GorillaTagger.field("offlineVRRig").value;
  const GTPlayer = GTPlayerClass.field("_instance").value;
  const GorillaComputer = Il2Cpp.domain.assembly("Assembly-CSharp").image.class("GorillaNetworking.GorillaComputer").field("instance").value;

  const UberShader = Shader.method("Find").invoke(Il2Cpp.string("GorillaTag/UberShader"));
  const TextShader = Shader.method("Find").invoke(Il2Cpp.string("GUI/Text Shader"));

  const GorillaSurfaceOverride = AssemblyCSharp.class("GorillaSurfaceOverride");
  
  const zeroVector = Vector3.field("zeroVector").value;
  const oneVector = Vector3.field("oneVector").value;
  const identityQuaternion = Quaternion.field("identityQuaternion").value;

  const leftHandTransform = GorillaTagger.field("leftHandTransform").value;
  const rightHandTransform = GorillaTagger.field("rightHandTransform").value;
  const headCollider = GorillaTagger.field("headCollider").value;
  const bodyCollider = GorillaTagger.field("bodyCollider").value;

  const arial = Resources
    .method("GetBuiltinResource", 1) 
    .inflate(Font)                   
    .invoke(Il2Cpp.string("Arial.ttf"));
   
  function Destroy(object){
    Object.method("Destroy", 1).invoke(object);
  }

  function getComponent(obj: any, type) {
    return obj.method("GetComponent", 1).inflate(type).invoke();
  }

  function getComponentInParent(obj: any, type) {
    return obj.method("GetComponentInParent", 0).inflate(type).invoke();
  }

  function addComponent(obj: any, type) {
    return obj.method("AddComponent", 1).inflate(type).invoke();
  }

  function getOrAddComponent(obj: any, type) {
    let returnType = getComponent(obj, type);
    if (returnType != null && returnType != undefined){
      return returnType
    }
    return addComponent(obj, type);
  }

  function getObject(obj){
    return GameObject.method("Find", 1).invoke(Il2Cpp.string(obj));
  }

  function playerIsLocal(player){
    return player.method("get_isLocal").invoke();
  }

  function setPlayerName(name){
    GorillaComputer.field("currentName").value = Il2Cpp.string(name);
    GorillaComputer.field("savedName").value = Il2Cpp.string(name);

    PlayerPrefs.method("SetString").invoke(Il2Cpp.string("playerName"), Il2Cpp.string(name))
    PlayerPrefs.method("Save").invoke();

    PhotonNetwork.method("get_LocalPlayer").invoke().method("set_NickName").invoke(Il2Cpp.string(name));
  }

  function setPlayerColor(color){
    PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("redValue"), color[0]);
    PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("greenValue"), color[1]);
    PlayerPrefs.method("SetFloat").invoke(Il2Cpp.string("blueValue"), color[2]);
    PlayerPrefs.method("Save").invoke();

    GorillaTagger.method("UpdateColor").invoke(color[0], color[1], color[2]);
    const objectArray = Il2Cpp.array(SystemObject, [
      Il2Cpp.reference(color[0], Il2Cpp.Type.Enum.FLOAT),
      Il2Cpp.reference(color[1], Il2Cpp.Type.Enum.FLOAT),
      Il2Cpp.reference(color[2], Il2Cpp.Type.Enum.FLOAT)
    ]);

    const method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload(
    "System.String", 
    "Photon.Pun.RpcTarget",
    "System.Object[]");

    method.invoke(Il2Cpp.string("RPC_InitializeNoobMaterial"), 0, objectArray);
  }

  function getTransform(obj: any){
    return obj.method("get_transform").invoke();
  }

  function world2Player(position){
    position = Vector3.method("op_Subtraction", 2).invoke(position, getTransform(bodyCollider).method("get_position").invoke());
    position = Vector3.method("op_Addition", 2).invoke(position, getTransform(GorillaTagger).method("get_position").invoke());
    return position;
  }

  function teleportPlayer(position){
    GTPlayer.method("TeleportTo", 3).invoke(world2Player(position), getTransform(GTPlayer).method("get_rotation").invoke(), false);
  }

  function sendAllOutgoing(){
    PhotonNetwork.method("SendAllOutgoingCommands").invoke();
  }

  function serialize(){
    PhotonNetwork.method("RunViewUpdate").invoke();
  }

  function renderMenuText(
    canvasObject,
    text: string = "",
    color: [number, number, number, number] = [1, 1, 1, 1],
    pos = zeroVector,
    size = oneVector
  ){
    const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
    title.method("set_text").invoke(Il2Cpp.string(text));
    title.method("set_font").invoke(arial);
    title.method("set_fontSize").invoke(1);
    title.method("set_color").invoke(color);
    title.method("set_fontStyle").invoke(2);
    title.method("set_alignment").invoke(4);
    title.method("set_resizeTextForBestFit").invoke(true);
    title.method("set_resizeTextMinSize").invoke(0);

    const rectTransform = getComponent(title, RectTransform);
    rectTransform.method("set_sizeDelta").invoke(size);
    rectTransform.method("set_position").invoke(pos);
    rectTransform.method("set_rotation").invoke(Quaternion.method("Euler").invoke(180.0, 90.0, 90.0))
  }

  function createMaterial(shader){
    const material = Material.new();
    return Material.method("CreateWithShader").invoke(material, shader);
  }

  function createObject(
    pos = zeroVector, 
    rot = identityQuaternion, 
    scale = oneVector, 
    primitiveType: number = 3, 
    colorArr: [number, number, number, number] = [1, 1, 1, 1],
    parent = null
  ) {
    const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);

    const renderer = getComponent(obj, Renderer);
    
    if (colorArr[3] == 0){
      renderer.method("set_enabled").invoke(false);
    } else {
      const material = renderer.method("get_material").invoke();
      material.method("set_shader").invoke(UberShader);
      material.method("set_color").invoke(colorArr); 
    }
    
    const transform = getTransform(obj); 
    if (parent != null){
      transform.method("SetParent", 2).invoke(parent, false);
    }

    transform.method("set_position").invoke(pos);
    transform.method("set_rotation").invoke(rot);
    transform.method("set_localScale").invoke(scale);

    return obj;
  }

  function sendNotification(NotificationText: string = "", requiresReload: boolean = true, clearTime: number = 5){
    const isOld = (currentNotification == NotificationText);
    notifactionResetTime = time + clearTime;
    currentNotification = NotificationText;
    if (requiresReload && !isOld)
      reloadMenu();
  }

  function renderMenu(){
    menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
    Destroy(getComponent(menu, BoxCollider))

    const menuBackground = createObject([0.1, 0, 0], identityQuaternion, [0.1, 1, 1], 3, bgColor, getTransform(menu))
    Destroy(getComponent(menuBackground, BoxCollider))

    const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
    const canvas = addComponent(canvasObject, Canvas);
    Destroy(getComponent(canvasObject, BoxCollider))

    const canvasScaler = addComponent(canvasObject, CanvasScaler);
    addComponent(canvasObject, GraphicRaycaster);
    canvas.method("set_renderMode").invoke(2);
    canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1000.0);

    renderMenuText(canvasObject, menuName + `<color=grey>[</color><color=white>${currentPage + 1}</color><color=grey>]</color>`, textColor, [0.11, 0, 0.175], [1, 0.1]);

    if (time > notifactionResetTime)
      currentNotification = "";
    renderMenuText(canvasObject, currentNotification, textColor, [0.11, 0, 0.275], [1, 0.1]);

    const disconnectButton = createObject([0.1, 0.0, 0.225], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
    disconnectButton.method("set_name").invoke(Il2Cpp.string("@Disconnect"));
    
    addComponent(disconnectButton, GorillaReportButton);
    getComponent(disconnectButton, BoxCollider).method("set_isTrigger").invoke(true);
    renderMenuText(canvasObject, "Disconnect", textColor, [0.11, 0, 0.225], [1, 0.1]);

    const returnButton = createObject([0.1, -0.175, -0.225], identityQuaternion, [0.09, 0.09, 0.09], 3, buttonColor, getTransform(menu));
    returnButton.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"));
    
    addComponent(returnButton, GorillaReportButton);
    getComponent(returnButton, BoxCollider).method("set_isTrigger").invoke(true);
    renderMenuText(canvasObject, "<", textColor, [0.11, -0.175, -0.225], [1, 0.1]);

    {
      const pageButton = createObject([0.1, 0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
      pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));

      addComponent(pageButton, GorillaReportButton);
      getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
      renderMenuText(canvasObject, "<", textColor, [0.11, 0.2, 0], [1, 0.1]);
    }

    {
      const pageButton = createObject([0.1, -0.2, 0], identityQuaternion, [0.09, 0.2, 0.9], 3, buttonColor, getTransform(menu));
      pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));

      addComponent(pageButton, GorillaReportButton);
      getComponent(pageButton, BoxCollider).method("set_isTrigger").invoke(true);
      renderMenuText(canvasObject, ">", textColor, [0.11, -0.2, 0], [1, 0.1]);
    }

    let i = 0;
    const targetMods = buttons[currentCategory]
      .slice(currentPage * 8)
      .slice(0, 8);

    targetMods.forEach((buttonData, index) => {
      const button = createObject([0.105, 0, 0.13 - (i * 0.04)], identityQuaternion, [0.09, 0.9, 0.08], 3, buttonColor, getTransform(menu));
      button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText));

      addComponent(button, GorillaReportButton);
      getComponent(button, BoxCollider).method("set_isTrigger").invoke(true);
      renderMenuText(canvasObject, buttonData.buttonText, textColor, [0.11, 0, 0.13 - (i * 0.04)], [1, 0.1]);
      updateButtonColor(button, buttonData);
      i++;
    });

    recenterMenu();
  }

  function renderReference(){
    reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform)
    referenceCollider = getComponent(reference, Collider);

    getTransform(reference).method("set_localPosition").invoke([0.01, -0.027, 0.09]);
    reference.method("set_layer").invoke(2);
    addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
  }

  let gunLocked = false;
  let lockTarget = null;
  let GunPointer = null;
  let GunLine = null;
  function renderGun(overrideLayerMask = null) {
    const StartPosition = rightHandTransform.method("get_position").invoke();
    const Direction = rightHandTransform.method("get_forward").invoke();

    const DirectionDivided = Vector3.method("op_Division").invoke(Direction, 4);
    const rayStartPosition = Vector3.method("op_Addition").invoke(StartPosition, DirectionDivided);
    
    const layerMask = overrideLayerMask || -3180559;

    const hits =  Physics.method("RaycastAll", 4).invoke(
      rayStartPosition,
      Direction,
      512.0,
      layerMask
    );

    let finalDistance = Infinity;
    let finalRay = null;
    for (const hit of hits){
      const distance = Vector3.method("Distance").invoke(hit.method("get_point").invoke(), StartPosition);
      if (distance < finalDistance){
        finalRay = hit;
        finalDistance = distance;
      }
    }
    
    let EndPosition;
    if (gunLocked) {
      EndPosition = getTransform(lockTarget).method("get_position").invoke();
    } else {
      EndPosition = finalRay.method("get_point").invoke();
    }

    if (Vector3.method("op_Equality").invoke(EndPosition, zeroVector)) {
      const farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
      EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
    }

    if (GunPointer == null) {
      GunPointer = createObject(EndPosition, identityQuaternion, [0.1, 0.1, 0.1], 0, [1, 1, 1, 1]);
    } 

    GunPointer.method("SetActive").invoke(true);
    const pointerTransform = getTransform(GunPointer);
    pointerTransform.method("set_position").invoke(EndPosition);
    
    const PointerRenderer = getComponent(GunPointer, Renderer);
    const material = PointerRenderer.method("get_material").invoke();

    material.method("set_shader").invoke(TextShader);
    
    const pointerColor = (gunLocked || rightTrigger) ? buttonPressedColor : buttonColor;
    material.method("set_color").invoke(pointerColor);

    const collider = getComponent(GunPointer, Collider);
    if (collider != null) {
      Destroy(collider);
    }

    if (GunLine == null) {
      const lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
      GunLine = addComponent(lineObj, LineRenderer);
    } else {
      GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
    }
 
    const lineMaterial = GunLine.method("get_material").invoke();
    lineMaterial.method("set_shader").invoke(TextShader);
    
    GunLine.method("set_startColor").invoke(bgColor);
    GunLine.method("set_endColor").invoke(bgColor);
    
    const lineWidth = 0.025;
    GunLine.method("set_startWidth").invoke(lineWidth);
    GunLine.method("set_endWidth").invoke(lineWidth);
    
    GunLine.method("set_positionCount").invoke(2);
    GunLine.method("set_useWorldSpace").invoke(true);

    GunLine.method("set_numCapVertices").invoke(10);
    
    GunLine.method("SetPosition").invoke(0, StartPosition);
    GunLine.method("SetPosition").invoke(1, EndPosition);

    if (rightTrigger || gunLocked) {
        const Step = 10;
        GunLine.method("set_positionCount").invoke(Step);
        GunLine.method("SetPosition").invoke(0, StartPosition);
        
        for (let i = 1; i < (Step - 1); i++) {
            const t = i / (Step - 1);
            const Position = Vector3.method("Lerp").invoke(StartPosition, EndPosition, t);
            
            const randomValue = Math.random();
            let offset = zeroVector;
            
            if (randomValue > 0.75) {
                offset = [
                    (Math.random() * 0.2) - 0.1,
                    (Math.random() * 0.2) - 0.1,
                    (Math.random() * 0.2) - 0.1
                ];
            }
            
            const finalPosition = Vector3.method("op_Addition").invoke(Position, offset);
            GunLine.method("SetPosition").invoke(i, finalPosition);
        }
        
        GunLine.method("SetPosition").invoke(Step - 1, EndPosition);
    }
    
    return { ray: finalRay, gunPointer: GunPointer };
  }

  function recenterMenu(){
    let menuPosition = leftHandTransform.method("get_position").invoke();
    let menuRotation = leftHandTransform.method("get_rotation").invoke();
    
    menuRotation = Quaternion.method("op_Multiply", 2).invoke(menuRotation, Quaternion.method("Euler").invoke(-45, 0, 0))

    const menuTransform = getTransform(menu);
    menuTransform.method("set_position").invoke(menuPosition);
    menuTransform.method("set_rotation").invoke(menuRotation);
  }

  function reloadMenu(){
    if (menu != null){
      Object.method("Destroy", 1).invoke(menu);
      menu = null;
    }
  }

  function updateButtonColor(button, buttonData) {
    const RendererClass = Il2Cpp.domain
        .assembly("UnityEngine.CoreModule")
        .image
        .class("UnityEngine.Renderer");

    const renderer = getComponent(button, RendererClass);
    if (!renderer) {
        return;
    }

    const material = renderer.method("get_material").invoke();
    material.method("set_color").invoke(buttonData.enabled ? buttonPressedColor : buttonColor); 
  }

  function playButtonSound(){
    LocalRig.method("PlayHandTapLocal").invoke(8, false, 0.3);
    GorillaTagger.method("StartVibration").invoke(false, 0.5, 0.075);
  }

  function toggleColliders(enabled){
    const meshColliders = Object.method("FindObjectsOfType").inflate(MeshCollider).invoke();

    for (let i = 0; i < meshColliders.length; i++) {
      const meshCollider = meshColliders.get(i);
      meshCollider.method("set_enabled").invoke(enabled);
    }
  }

  interface ButtonInfoConfig {
    buttonText: string;
    method?: () => void;
    enableMethod?: () => void;
    disableMethod?: () => void;
    isTogglable?: boolean;
    toolTip?: string;
    enabled?: boolean;
  }

  class ButtonInfo {
    buttonText: string;
    method?: () => void;
    enableMethod?: () => void;
    disableMethod?: () => void;
    isTogglable: boolean;
    toolTip?: string;
    enabled: boolean;

    constructor(config: ButtonInfoConfig) {
      this.buttonText = config.buttonText;
      this.method = config.method;
      this.enableMethod = config.enableMethod;
      this.disableMethod = config.disableMethod;
      this.isTogglable = config.isTogglable ?? true;
      this.toolTip = config.toolTip ?? null;
      this.enabled = config.enabled ?? false;
    }
  }

  let currentCategory = 0;
  let currentPage = 0;
  
  const buttons: ButtonInfo[][] = [
    [ // Main [0]
      new ButtonInfo({
        buttonText: "Settings",
        method: () => currentCategory = 2,
        isTogglable: false,
        toolTip: "Opens the settings category."
      }),
      new ButtonInfo({
        buttonText: "Movement Mods",
        method: () => currentCategory = 3,
        isTogglable: false,
        toolTip: "Opens the movement category."
      }),
      new ButtonInfo({
        buttonText: "Fun Mods",
        method: () => currentCategory = 4,
        isTogglable: false,
        toolTip: "Opens the fun category."
      }),
      new ButtonInfo({
        buttonText: "Advantage Mods",
        method: () => currentCategory = 5,
        isTogglable: false,
        toolTip: "Opens the advantage category."
      }),
    ],

    [ // Hidden [1]
      new ButtonInfo({
        buttonText: "Disconnect",
        method: () => NetworkSystem.method("ReturnToSinglePlayer").invoke(),
        isTogglable: false,
        toolTip: "Disconnects you from the room."
      }),
      new ButtonInfo({
        buttonText: "PreviousPage",
        method: () => {
          const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;

          currentPage--;
          if (currentPage < 0)
            currentPage = lastPage;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "NextPage",
        method: () => {
          const lastPage = Math.ceil(buttons[currentCategory].length / 8) - 1;
          
          currentPage++;
          currentPage %= lastPage + 1;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "GlobalReturn",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      })
    ],

    [ // Settings [2]
      new ButtonInfo({
        buttonText: "Exit Settings",
        method: () => currentCategory = 0,
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "Change Menu Theme",
        method: () => {
          themeIndex++;
          themeIndex %= 4;

          switch (themeIndex){
            case 0:
              bgColor = [1.0, 0.5, 0.0, 1.0];
              textColor = [1.0, 0.7450981, 0.4901961, 1.0];

              buttonColor = [0.666, 0.333, 0.0, 1.0];
              buttonPressedColor = [0.333, 0.150, 0.0, 1.0];
              break;
            case 1:
              bgColor = [1.0, 0.0, 0.0, 1.0];
              textColor = [1.0, 1.0, 1.0, 1.0];

              buttonColor = [0.0, 0.0, 0.0, 1.0];
              buttonPressedColor = [1.0, 0.0, 0.0, 1.0];
              break;
            case 2:
              bgColor = [0.0, 1.0, 0.0, 1.0];
              textColor = [1.0, 1.0, 1.0, 1.0];

              buttonColor = [0.0, 0.0, 0.0, 1.0];
              buttonPressedColor = [0.0, 1.0, 0.0, 1.0];
              break;
            case 3:
              bgColor = [0.0, 0.0, 1.0, 1.0];
              textColor = [1.0, 1.0, 1.0, 1.0];

              buttonColor = [0.0, 0.0, 0.0, 1.0];
              buttonPressedColor = [0.0, 0.0, 1.0, 1.0];
              break;
          }
        },
        isTogglable: false,
        toolTip: "Changes the theme of the menu."
      }),
      new ButtonInfo({
        buttonText: "Freeze Player in Menu",
        enabled: true,
        method: () => {
          if (menu != null)
          {
            if (closePosition == null) {
              closePosition = getTransform(rigidbody).method("get_position").invoke();
            }
            else {
              getTransform(rigidbody).method("set_position").invoke(closePosition);
              rigidbody.method("set_velocity").invoke(zeroVector);
            }
          } else {
            closePosition = null;
          }
        },
        toolTip: "Freezes your character while in the menu."
      }),
      new ButtonInfo({
        buttonText: "Button Notifications",
        enabled: true,
        method: () => buttonNotifications = true,
        disableMethod: () => buttonNotifications = false,
        toolTip: "Shows notifications when clicking menu buttons, may cause lag."
      }),
    ],

    [ // Movement Mods [3]
      new ButtonInfo({
        buttonText: "Exit Movement Mods",
        method: () => currentCategory = 0,
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),

      new ButtonInfo({
        buttonText: "Platforms",
        method: () => {
          if (leftGrab){
            if (leftPlatform == null){
              const handTransform = leftHandTransform;
              leftPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
            }
          } else {
            if (leftPlatform != null){
              Destroy(leftPlatform);
              leftPlatform = null;
            }
          }

          if (rightGrab){
            if (rightPlatform == null){
              const handTransform = rightHandTransform;
              rightPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
            }
          } else {
            if (rightPlatform != null){
              Destroy(rightPlatform);
              rightPlatform = null;
            }
          }
        },
        toolTip: "Spawns platforms when pressing grip."
      }),
      
      new ButtonInfo({
        buttonText: "Trigger Platforms",
        method: () => {
          if (leftTrigger){
            if (leftPlatform == null){
              const handTransform = leftHandTransform;
              leftPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
            }
          } else {
            if (leftPlatform != null){
              Destroy(leftPlatform);
              leftPlatform = null;
            }
          }

          if (rightTrigger){
            if (rightPlatform == null){
              const handTransform = rightHandTransform;
              rightPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
            }
          } else {
            if (rightPlatform != null){
              Destroy(rightPlatform);
              rightPlatform = null;
            }
          }
        },
        toolTip: "Spawns platforms when pressing trigger."
      }),
      
      new ButtonInfo({
        buttonText: "Frozone",
        method: () => {
          if (leftGrab){
            if (leftPlatform == null){
              const handTransform = leftHandTransform;
              leftPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
              addComponent(leftPlatform, GorillaSurfaceOverride).field("overrideIndex").value = 61;
            }
          } else {
            if (leftPlatform != null){
              Destroy(leftPlatform);
              leftPlatform = null;
            }
          }

          if (rightGrab){
            if (rightPlatform == null){
              const handTransform = rightHandTransform;
              rightPlatform = createObject(handTransform.method("get_position").invoke(), handTransform.method("get_rotation").invoke(), [0.025, 0.15, 0.2], 3, bgColor);
              addComponent(rightPlatform, GorillaSurfaceOverride).field("overrideIndex").value = 61;
            }
          } else {
            if (rightPlatform != null){
              Destroy(rightPlatform);
              rightPlatform = null;
            }
          }
        },
        toolTip: "Spawns slippy platforms when pressing grip."
      }),

      new ButtonInfo({
        buttonText: "Fly",
        method: () => {
          if (rightPrimary){
            rigidbody.method("set_velocity").invoke(Vector3.field("zeroVector").value);

            const transform = getTransform(GorillaTagger);
            let forward = getTransform(headCollider).method("get_forward").invoke();

            let position = transform.method("get_position").invoke();
            forward = Vector3.method("op_Multiply", 2).invoke(forward, 25.0 * deltaTime);

            position = Vector3.method("op_Addition", 2).invoke(position, forward);

            transform.method("set_position").invoke(position);
          }
        },
        toolTip: "Lets you fly around while holding A."
      }),

      new ButtonInfo({
        buttonText: "Trigger Fly",
        method: () => {
          if (rightTrigger){
            rigidbody.method("set_velocity").invoke(Vector3.field("zeroVector").value);

            const transform = getTransform(GorillaTagger);
            let forward = getTransform(headCollider).method("get_forward").invoke();

            let position = transform.method("get_position").invoke();
            forward = Vector3.method("op_Multiply", 2).invoke(forward, 25.0 * deltaTime);

            position = Vector3.method("op_Addition", 2).invoke(position, forward);

            transform.method("set_position").invoke(position);
          }
        },
        toolTip: "Lets you fly around while holding trigger."
      }),

      new ButtonInfo({
        buttonText: "Up And Down",
        method: () => {
          if (rightTrigger && rightGrab){
            rigidbody.method("set_velocity").invoke(Vector3.field("zeroVector").value);
          }
          if (rightTrigger && !rightGrab){
            rigidbody.method("AddForce").invoke(Vector3.field("upVector").value, 175 * deltaTime);
          }
          if (!rightTrigger && rightGrab){
            rigidbody.method("AddForce").invoke(Vector3.field("downVector").value, 175 * deltaTime);
          }
        },
        toolTip: "Makes you go up when holding trigger, and down when holding grip."
      }),

      new ButtonInfo({
        buttonText: "No Tag Freeze",
        method: () => GTPlayer.field("disableMovement").value = false,
        toolTip: "Disables tag freeze on your character.",
      }),

      new ButtonInfo({
        buttonText: "Low Gravity",
        method: () => {
          const force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (6.66 / deltaTime)));
          rigidbody.method("AddForce", 2).invoke(force, 5);
        },
        toolTip: "Makes gravity lower on your character."
      }),

      new ButtonInfo({
        buttonText: "Zero Gravity",
        method: () => { 
          const force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
          rigidbody.method("AddForce", 2).invoke(force, 5);
        },
        toolTip: "Makes gravity lower on your character."
      }),

      new ButtonInfo({
        buttonText: "High Gravity",
        method: () => {
          const force = Vector3.method("op_Multiply", 2).invoke(Vector3.field("downVector").value, (deltaTime * (7.77 / deltaTime)));
          rigidbody.method("AddForce", 2).invoke(force, 5);
        },
        toolTip: "Makes gravity higher on your character."
      }),

      new ButtonInfo({
        buttonText: "Weak Wall Walk",
        method: () => {
          if (GTPlayer.method("IsHandTouching").invoke(true) || GTPlayer.method("IsHandTouching").invoke(false)){
            const ray = GTPlayer.field("lastHitInfoHand").value;
            walkPos = ray.method("get_point").invoke();
            walkNormal = ray.method("get_normal").invoke();
          }
          if (walkPos != Vector3.field("zeroVector").value && rightGrab){
            const force = Vector3.method("op_Multiply", 2).invoke(walkNormal, -5);
            rigidbody.method("AddForce").invoke(force, 5);
            const zeroForce = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
            rigidbody.method("AddForce", 2).invoke(zeroForce, 5);
          }
        },
        toolTip: "Makes you get brought towards any wall you touch when holding grip, but weaker."
      }),

      new ButtonInfo({
        buttonText: "Wall Walk",
        method: () => {
          if (GTPlayer.method("IsHandTouching").invoke(true) || GTPlayer.method("IsHandTouching").invoke(false)){
            const ray = GTPlayer.field("lastHitInfoHand").value;
            walkPos = ray.method("get_point").invoke();
            walkNormal = ray.method("get_normal").invoke();
          }
          if (walkPos != Vector3.field("zeroVector").value && rightGrab){
            const force = Vector3.method("op_Multiply", 2).invoke(walkNormal, -9.81);
            rigidbody.method("AddForce").invoke(force, 5);
            const zeroForce = Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, (deltaTime * (9.81 / deltaTime)));
            rigidbody.method("AddForce", 2).invoke(zeroForce, 5);
          }
        },
        toolTip: "Makes you get brought towards any wall you touch when holding grip."
      }),

      new ButtonInfo({
        buttonText: "Teleport Gun",
        method: () => {
          if (rightGrab){
            const gunData = renderGun();
            const gunPointer = gunData.gunPointer;

            if (rightTrigger && !perviousTeleportKey){
              teleportPlayer(getTransform(gunPointer).method("get_position").invoke())
              rigidbody.method("set_velocity").invoke(zeroVector);
            }

            perviousTeleportKey = rightTrigger;
          }
        },
        toolTip: "Teleports you to wherever your hand desires."
      }),

      new ButtonInfo({
        buttonText: "Iron Man",
        method: () => {
           if (leftPrimary){
            const leftRightVector = leftHandTransform.method("get_right").invoke();
            const leftForce = Vector3.method("op_Multiply", 2).invoke(leftRightVector, -15.0 * deltaTime);
            rigidbody.method("AddForce", 2).invoke(leftForce, 2);
          }
          if (rightPrimary){
            const leftRightVector = rightHandTransform.method("get_right").invoke();
            const leftForce = Vector3.method("op_Multiply", 2).invoke(leftRightVector, 15.0 * deltaTime);
            rigidbody.method("AddForce", 2).invoke(leftForce, 2);
          }
        },
        toolTip: "Turns you into iron man. Use A and X to fly."
      }),

      new ButtonInfo({
        buttonText: "Noclip",
        method: () => {
          if (rightTrigger && !previousNoclipKey){
            toggleColliders(false);
          }

          if (!rightTrigger && previousNoclipKey){
            toggleColliders(true);
          }

          previousNoclipKey = rightTrigger;
        },
        toolTip: "Lets you clip through objects while holding right trigger."
      }),

      new ButtonInfo({
        buttonText: "Long Arms",
        method: () => {
          getTransform(GorillaTagger).method("set_localScale").invoke([1.25, 1.25, 1.25]);
        },
        disableMethod: () => {
          getTransform(GorillaTagger).method("set_localScale").invoke(oneVector);
        },
        toolTip: "Gives you longer arms."
      }),

      new ButtonInfo({
        buttonText: "Speed Boost",
        method: () => {
          GTPlayer.field("maxJumpSpeed").value = 9.0;
          GTPlayer.method("set_jumpMultiplier").invoke(1.5);
        },
        toolTip: "Gives you a speed boost."
      }),

      new ButtonInfo({
        buttonText: "Predictions",
        enableMethod: () => {
          lvT = createObject(zeroVector, identityQuaternion, zeroVector, 0, [0.0, 0.0, 0.0, 0.0]);
          Destroy(getComponent(lvT, BoxCollider))
          addComponent(lvT, GorillaVelocityTracker);

          rvT = createObject(zeroVector, identityQuaternion, zeroVector, 0, [0.0, 0.0, 0.0, 0.0]);
          Destroy(getComponent(rvT, BoxCollider))
          addComponent(rvT, GorillaVelocityTracker);
        },
        method: () => {
          let predCount = 0.02;

          getTransform(lvT).method("set_position").invoke(Vector3.method("op_Subtraction", 2).invoke(getTransform(headCollider).method("get_position").invoke(), leftHandTransform.method("get_position").invoke()));
          getTransform(rvT).method("set_position").invoke(Vector3.method("op_Subtraction", 2).invoke(getTransform(headCollider).method("get_position").invoke(), rightHandTransform.method("get_position").invoke()));

          let leftHandPosition = leftHandTransform.method("get_position").invoke();
          let rightHandPosition = rightHandTransform.method("get_position").invoke();

          let leftHandVelocity = getComponent(lvT, GorillaVelocityTracker).method("GetAverageVelocity").invoke(true, 0.0, false);
          let rightHandVelocity = getComponent(rvT, GorillaVelocityTracker).method("GetAverageVelocity").invoke(true, 0.0, false);

          leftHandVelocity = Vector3.method("op_Multiply", 2).invoke(leftHandVelocity, predCount);
          rightHandVelocity = Vector3.method("op_Multiply", 2).invoke(rightHandVelocity, predCount);

          leftHandPosition = Vector3.method("op_Subtraction", 2).invoke(leftHandPosition, leftHandVelocity);
          rightHandPosition = Vector3.method("op_Subtraction", 2).invoke(rightHandPosition, rightHandVelocity);

          leftHandTransform.method("set_position").invoke(leftHandPosition);
          rightHandTransform.method("set_position").invoke(rightHandPosition);
        },
        disableMethod: () => {
          Destroy(lvT);
          Destroy(rvT);
        },
        toolTip: "Gives your controllers higher predictions."
      }),

      new ButtonInfo({
        buttonText: "Ghost",
        method: () => {
          if (rightPrimary && !previousGhostKey){
            LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
          }
          previousGhostKey = rightPrimary;
        },
        toolTip: "Freezes your rig when pressing A."
      }),

      new ButtonInfo({
        buttonText: "Invisible",
        method: () => {
          if (rightSecondary && !previousInvisKey){
            LocalRig.method("set_enabled").invoke(!LocalRig.method("get_enabled").invoke());
          }
          if (!LocalRig.method("get_enabled").invoke()){
            getTransform(LocalRig).method("set_position").invoke([0, -99999, 0]);
          }
          previousInvisKey = rightSecondary;

        },
        toolTip: "Turns you invisible when pressing B."
      }),
    ],

    [ // Fun Mods [4]
      new ButtonInfo({
        buttonText: "Exit Fun Mods",
        method: () => currentCategory = 0,
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "Spawn Hoverboard",
        method: () => {
          GTPlayer.method("SetHoverAllowed").invoke(true, true)
          FreeHoverboardManager.method("SendDropBoardRPC").invoke(rightHandTransform.method("get_position").invoke(), identityQuaternion, zeroVector, zeroVector, bgColor);
        },
        isTogglable: false,
        toolTip: "Spawns you in a hoverboard."
      }),
      new ButtonInfo({
        buttonText: "Spaz Rig",
        method: () => {
          const trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
          trackingRotationOffset.field("x").value = Math.random() * 360.0;
          trackingRotationOffset.field("y").value = Math.random() * 360.0;
          trackingRotationOffset.field("z").value = Math.random() * 360.0;
        },
        disableMethod: () => {
          const trackingRotationOffset = LocalRig.field("head").value.field("trackingRotationOffset").value;
          trackingRotationOffset.field("x").value = 0.0;
          trackingRotationOffset.field("y").value = 0.0;
          trackingRotationOffset.field("z").value = 0.0;
        },
        toolTip: "Spazzes your rig out."
      }),
      new ButtonInfo({
        buttonText: "Become Goldentrophy",
        method: () => {
          setPlayerName("goldentrophy");
          setPlayerColor([1.0, 0.5, 0.0]);
        },
        isTogglable: false,
        toolTip: "Turns you into goldentrophy."
      }),
      new ButtonInfo({
        buttonText: "Water Splash Hands",
        method: () => {
          if (leftGrab && time > splashDelay){
            splashDelay = time + 0.1;
            const objectArray = Il2Cpp.array(SystemObject, [leftHandTransform.method("get_position").invoke(), leftHandTransform.method("get_rotation").invoke(), 1.0, 0.5, true, false]);

            const method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload(
            "System.String", 
            "Photon.Pun.RpcTarget",
            "System.Object[]");

            method.invoke(Il2Cpp.string("RPC_PlaySplashEffect"), 0, objectArray);
          }
          if (rightGrab && time > splashDelay){
            splashDelay = time + 0.1;
            const objectArray = Il2Cpp.array(SystemObject, [rightHandTransform.method("get_position").invoke(), rightHandTransform.method("get_rotation").invoke(), 1.0, 0.5, true, false]);

            const method = GorillaTagger.method("get_myVRRig").invoke().method("SendRPC", 3).overload(
            "System.String", 
            "Photon.Pun.RpcTarget",
            "System.Object[]");

            method.invoke(Il2Cpp.string("RPC_PlaySplashEffect"), 0, objectArray);
          }
        },
        toolTip: "Splashes water on your hands when pressing your grips."
      }),
      new ButtonInfo({
        buttonText: "Get ID Gun",
        method: () => {
          if (rightGrab){
            const gunData = renderGun();
            const ray = gunData.ray;

            if (rightTrigger){
              const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), VRRig);
              if (gunTarget && !gunTarget.handle.isNull() && time > idGunDelay){
                if (!playerIsLocal(gunTarget)){
                  idGunDelay = time + 0.5;
                  const id = gunTarget.method("get_Creator").invoke().method("get_UserId").invoke();
                  sendNotification( "ID: " + String(id) );
                }
              }
            }
          }
        },
        isTogglable: true,
        toolTip: "Logs the ID of whoever your hand desires."
      }),
    ],

    [ // Advantage Mods [5]
      new ButtonInfo({
        buttonText: "Exit Advantage Mods",
        method: () => currentCategory = 0,
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "Tag Gun",
        method: () => {
          if (rightGrab){
            const gunData = renderGun();
            const ray = gunData.ray;

            if (rightTrigger){
              const gunTarget = getComponentInParent(ray.method("get_collider").invoke(), VRRig);
              if (gunTarget && !gunTarget.handle.isNull() && time > tagGunDelay){
                if (!playerIsLocal(gunTarget)){
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
        buttonText: "Casual Tracers",
        disableMethod: () => {
          for (let line of linePool){
            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
          }
        },
        method: () => {
          if (frameCount % 5 != 0){
            for (let line of linePool){
              line.method("get_gameObject").invoke().method("SetActive").invoke(false);
            }
            const vrrigs = GorillaParent.field("vrrigs").value;
            const vrrigtotal = vrrigs.method("get_Count").invoke();
            for (let i = 0; i < vrrigtotal; i++){
              const playerRig = vrrigs.method("get_Item").invoke(i);
              if (!playerIsLocal(playerRig)){
                const color = playerRig.field("playerColor").value;
                if (lineRenderHolder == null){
                  lineRenderHolder = GameObject.new("LineRender_Holder");
                }
                let finalRender = null;
                let nl = false;
                for (let line of linePool){
                  if (finalRender != null) continue;
                  if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false){
                    line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                    finalRender = line;
                    break;
                  }
                }
                if (finalRender == null)
                {
                  nl = true;
                  const lineHolder = GameObject.new("LineObject");
                  getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                  const newLine = addComponent(lineHolder, LineRenderer);
                  const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
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
        toolTip: "Puts tracers on your right hand. Shows everyone."
      }),
      new ButtonInfo({
        buttonText: "Nearest Tracer",
        disableMethod: () => {
          for (let line of linePool){
            line.method("get_gameObject").invoke().method("SetActive").invoke(false);
          }
        },
        method: () => {
          if (frameCount % 5 != 0){
            let lowestDistance = Number.MAX_SAFE_INTEGER;
            let closest = 0;
            for (let line of linePool){
              line.method("get_gameObject").invoke().method("SetActive").invoke(false);
            }
            const vrrigs = GorillaParent.field("vrrigs").value;
            const vrrigtotal = vrrigs.method("get_Count").invoke();
            const rigs = [];
            for (let i = 0; i < vrrigtotal; i++){
              const playerRig = vrrigs.method("get_Item").invoke(i);
              rigs.push(playerRig);
              if (playerIsLocal(playerRig)) continue;
              const dist = Vector3.method("Distance").invoke(getTransform(headCollider).method("get_position").invoke(), getTransform(playerRig).method("get_position").invoke());
              if (lowestDistance > dist){
                lowestDistance = dist;
                closest = i;
              }
            }
            for (let i = 0; i < vrrigtotal; i++){
              if (i != closest) continue;
              const playerRig = rigs[i];
              if (!playerIsLocal(playerRig)){
                const color = playerRig.field("playerColor").value;
                if (lineRenderHolder == null){
                  lineRenderHolder = GameObject.new("LineRender_Holder");
                }
                let finalRender = null;
                let nl = false;
                for (let line of linePool){
                  if (finalRender != null) continue;
                  if (line.method("get_gameObject").invoke().method("get_activeInHierarchy").invoke() == false){
                    line.method("get_gameObject").invoke().method("SetActive").invoke(true);
                    finalRender = line;
                    break;
                  }
                }
                if (finalRender == null)
                {
                  nl = true;
                  const lineHolder = GameObject.new("LineObject");
                  getTransform(lineHolder).method("set_parent").invoke(getTransform(lineRenderHolder));
                  const newLine = addComponent(lineHolder, LineRenderer);
                  const shader = Shader.method("Find").overload("System.String").invoke(Il2Cpp.string("GUI/Text Shader"));
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
    ],
  ];

  let buttonMap: Map<string, ButtonInfo> = new Map();
  buttons.flat().forEach(button => {
    buttonMap.set(button.buttonText, button);
  });

  function getIndex(buttonText: string): ButtonInfo {
    return buttonMap.get(buttonText); 
  }
  
  const ButtonActivation = GorillaReportButton.method("OnTriggerEnter");
  ButtonActivation.implementation = function (collider) {
    const rawName = this.method("get_name").invoke().toString();

    if (rawName.length > 1 && rawName[1] == "@"){
      if (collider.handle.equals(referenceCollider.handle)){
        const goName = rawName.substring(2, rawName.length - 1);
        const _time = Time.method("get_time").invoke();
        
        if (_time > buttonClickDelay){
          buttonClickDelay = _time + 0.2;

          const button = getIndex(goName)
          playButtonSound();
          if (button) {
            if (button.isTogglable){
              button.enabled = !button.enabled;

              reloadMenu();
              if (button?.enabled) {
                if (button.toolTip && buttonNotifications)
                  sendNotification("<color=grey>[</color><color=green>ENABLE</color><color=grey>]</color> "+button.toolTip, false);
                button.enableMethod?.();
              } else {
                if (button.toolTip && buttonNotifications)
                  sendNotification("<color=grey>[</color><color=red>DISABLE</color><color=grey>]</color> "+button.toolTip, false);
                button?.disableMethod?.();
              }

            } else{
              reloadMenu();
              if (button.toolTip && buttonNotifications)
                sendNotification("<color=grey>[</color><color=green>ENABLE</color><color=grey>]</color> "+button.toolTip, false);
              button?.method?.();
            }
          }
        }
      }

      return;
    }

    return this.method("OnTriggerEnter").invoke(collider);
  };

  const VRRigOnDisable = VRRig.method("OnDisable");
  VRRigOnDisable.implementation = function () {
    if (this.handle.equals(LocalRig.handle)) {
        return;
    }

    return this.method("OnDisable").invoke();
  };

  const SendReport = GorillaNot.method("SendReport");
  SendReport.implementation = function () {
    return;
  }

  // Custom boards
  {
    let boardIndex = 0;
    const forest = getTransform(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom"));
    const childCount = forest.method("get_childCount").invoke();

    for (let i = 0; i < childCount; i++) { 
      const child = forest.method("GetChild").invoke(i);
      const gameObject = child.method("get_gameObject").invoke();
      if (gameObject.method("get_name").invoke().toString().includes("UnityTempFile")){
        boardIndex++;
        if (boardIndex == 5){
          const boardMaterial = Material.new();
          Material.method("CreateWithShader").invoke(boardMaterial, UberShader);

          getComponent(gameObject, Renderer).method("set_material").invoke(boardMaterial);
          boardMaterial.method("set_color").invoke(bgColor);
          break;
        }
      }
    }

    const motdTitle = getComponent(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom/motdHeadingText"), TextMeshPro);
    motdTitle.method("set_text").invoke(Il2Cpp.string("Thanks for using ii's Stupid Menu!"));

    const motdText = getComponent(getObject("Environment Objects/LocalObjects_Prefab/TreeRoom/motdBodyText"), TextMeshPro);
    motdText.method("set_fontSize").invoke(100);
    motdText.method("set_text").invoke(Il2Cpp.string(`You are currently using build ${version}. Thank you for supporting me on Patreon, it means a lot! This menu runs completely standalone. I, iiDk, am not responsible for any bans using this menu. If you get banned while using this, it's your responsibility.`));
  }

  const LateUpdate = GTPlayer.method("LateUpdate");

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

    if (leftSecondary)
    {
      if (currentNotification != "" && time > notifactionResetTime)
        reloadMenu();

      if (menu == null)
      {
        renderMenu();
      } else {
        recenterMenu();
      }
    } else {
      if (menu != null){
        Destroy(menu);
        menu = null;
      }
    } 

    if (menu == null){
      if (reference != null){
        Destroy(reference);
        reference = null;
      }
    } else {
      if (reference == null){
        renderReference();
      }
    }

    try {
      if (GunPointer != null){
        if (!(GunPointer.method("get_activeSelf").invoke())){
          Destroy(GunPointer);
          GunPointer = null;
        }
        else
          GunPointer.method("SetActive").invoke(false);
      }
      
      let lineObj = GunLine.method("get_gameObject").invoke();
      if (lineObj != null){
        if (!(lineObj.method("get_activeSelf").invoke())){
          Destroy(lineObj);
          GunLine = null;
        }
        else
          lineObj.method("SetActive").invoke(false);
      }
    } catch {}

    buttons.flat()
      .filter(button => button.enabled)
      .forEach(button => {
        if (button.method) {
          try {
            button.method();
          } catch (error) {
            console.error(`Error executing method for button '${button.buttonText || 'unnamed'}':`, error); 
            console.error('Error stack:', error.stack);
            console.error('Button object:', button);

            if (error.stack) {
              const stackLines = error.stack.split('\n');
              if (stackLines.length > 1) {
                console.error('Error occurred at:', stackLines[1].trim());
              }
            }
          }
        }
      });

    return LateUpdate.invoke();
  };

  console.log(`

     ••╹   ┏┓     • ┓  ┳┳┓      
     ┓┓ ┏  ┗┓╋┓┏┏┓┓┏┫  ┃┃┃┏┓┏┓┓┏
     ┗┗ ┛  ┗┛┗┗┻┣┛┗┗┻  ┛ ┗┗ ┛┗┗┻
                ┛               
    ii's Stupid Menu Quest ${version}
    Compiled ${new Date().toISOString()}
`);
});
