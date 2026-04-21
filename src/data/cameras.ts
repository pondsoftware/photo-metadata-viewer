export interface CameraModel {
  name: string;
  type: string;
  megapixels: number;
  year: number;
}

export interface ExifField {
  field: string;
  description: string;
  example: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CameraBrand {
  slug: string;
  name: string;
  overview: string;
  marketPosition: string;
  rawFormat: string;
  commonExifFields: ExifField[];
  makerNoteFields: ExifField[];
  popularModels: CameraModel[];
  exifTips: string[];
  faqs: FaqItem[];
}

export const cameraBrands: CameraBrand[] = [
  {
    slug: "canon",
    name: "Canon",
    overview:
      "Canon Inc. is a Japanese multinational corporation founded in 1937 that has been one of the world's leading camera manufacturers for decades. Originally known as Precision Optical Instruments Laboratory, Canon began producing cameras in the 1930s and has since expanded into professional cinema cameras, lenses, printers, and medical imaging equipment.",
    marketPosition:
      "Canon holds a dominant position in the DSLR and mirrorless camera market, competing closely with Nikon and Sony. Their EOS R mirrorless system and long-established EF lens mount ecosystem make them a top choice for professionals and enthusiasts alike.",
    rawFormat: "CR2 (older DSLRs), CR3 (EOS R system and newer DSLRs)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "Canon" },
      { field: "Model", description: "Camera body model", example: "Canon EOS R5" },
      { field: "LensModel", description: "Lens used for the shot", example: "RF24-105mm F4 L IS USM" },
      { field: "SerialNumber", description: "Camera body serial number", example: "012345678901" },
      { field: "LensSerialNumber", description: "Lens serial number", example: "0000000000" },
      { field: "FirmwareVersion", description: "Camera firmware version", example: "Firmware Version 1.8.1" },
      { field: "InternalSerialNumber", description: "Canon internal serial identifier", example: "AB1234567890" },
    ],
    makerNoteFields: [
      { field: "CanonModelID", description: "Numeric identifier for the camera model", example: "0x80000424" },
      { field: "ContinuousDrive", description: "Continuous shooting mode setting", example: "Single" },
      { field: "FocusMode", description: "Autofocus mode used", example: "One-Shot AF" },
      { field: "RecordMode", description: "Image quality/recording setting", example: "JPEG Large Fine" },
      { field: "CanonImageSize", description: "Image size setting", example: "Large" },
      { field: "EasyMode", description: "Scene mode when using Auto modes", example: "Manual" },
      { field: "DigitalZoom", description: "Digital zoom factor applied", example: "None" },
      { field: "OwnerName", description: "Owner name set in camera", example: "John Smith" },
    ],
    popularModels: [
      { name: "EOS R5", type: "Mirrorless", megapixels: 45, year: 2020 },
      { name: "EOS R6 Mark II", type: "Mirrorless", megapixels: 24.2, year: 2022 },
      { name: "EOS R3", type: "Mirrorless", megapixels: 24.1, year: 2021 },
      { name: "EOS R8", type: "Mirrorless", megapixels: 24.2, year: 2023 },
      { name: "EOS 5D Mark IV", type: "DSLR", megapixels: 30.4, year: 2016 },
      { name: "EOS 90D", type: "DSLR", megapixels: 32.5, year: 2019 },
      { name: "EOS R7", type: "Mirrorless (APS-C)", megapixels: 32.5, year: 2022 },
      { name: "PowerShot G7 X Mark III", type: "Compact", megapixels: 20.1, year: 2019 },
    ],
    exifTips: [
      "Canon cameras store the OwnerName field in EXIF. Check this before sharing photos — it may contain your full name.",
      "The LensSerialNumber field can link different photos to the same lens, even across camera bodies.",
      "Canon's CR3 raw files use the HEIF container format and contain more detailed EXIF than CR2 files.",
      "Canon MakerNote data includes the exact focus point used, which can help analyze autofocus performance.",
      "When shooting with Canon Log or HDR PQ, additional metadata fields describe the color space and gamma curve.",
    ],
    faqs: [
      {
        question: "What EXIF data do Canon cameras store?",
        answer:
          "Canon cameras store standard EXIF fields like aperture, shutter speed, ISO, focal length, and GPS (if enabled), plus Canon-specific MakerNote data including focus mode, drive mode, white balance settings, lens serial number, and the owner name you set in the camera.",
      },
      {
        question: "What raw format do Canon cameras use?",
        answer:
          "Older Canon DSLRs use the CR2 raw format, while newer models (EOS R system and recent DSLRs) use CR3. CR3 files are based on the ISO Base Media File Format and contain more detailed metadata than CR2.",
      },
      {
        question: "Does the Canon EOS R5 save GPS data?",
        answer:
          "The Canon EOS R5 has a built-in GPS receiver that can embed location data in every photo. You can disable this in Menu > GPS settings > GPS: Disable. When enabled, GPSLatitude, GPSLongitude, GPSAltitude, and GPSTimeStamp fields are recorded.",
      },
    ],
  },
  {
    slug: "nikon",
    name: "Nikon",
    overview:
      "Nikon Corporation, founded in 1917 as Nippon Kogaku K.K., is a Japanese optics and imaging company with over a century of experience in precision optics. Nikon has been a cornerstone of professional photography, providing cameras and lenses used by photojournalists, sports photographers, and nature photographers worldwide.",
    marketPosition:
      "Nikon is one of the top three camera manufacturers globally, alongside Canon and Sony. Their Z-mount mirrorless system is the successor to the legendary F-mount DSLR system. Nikon is especially well-regarded for color accuracy and rugged build quality.",
    rawFormat: "NEF (Nikon Electronic Format), NRW (Coolpix raw)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "NIKON CORPORATION" },
      { field: "Model", description: "Camera body model", example: "NIKON Z 8" },
      { field: "LensModel", description: "Lens identification", example: "NIKKOR Z 24-70mm f/2.8 S" },
      { field: "SerialNumber", description: "Camera body serial number", example: "3001234" },
      { field: "Software", description: "Firmware or processing software", example: "Ver.02.00" },
      { field: "SubjectDistanceRange", description: "Subject distance category", example: "Unknown" },
    ],
    makerNoteFields: [
      { field: "AFAreaMode", description: "Autofocus area mode", example: "Single Area" },
      { field: "AFPoint", description: "Which AF point was active", example: "Center" },
      { field: "ActiveD-Lighting", description: "Dynamic range optimization setting", example: "Normal" },
      { field: "HighISONoiseReduction", description: "In-camera noise reduction level", example: "Normal" },
      { field: "VignetteControl", description: "Lens vignette correction setting", example: "Normal" },
      { field: "VRMode", description: "Vibration Reduction (image stabilization) mode", example: "Normal" },
      { field: "ShutterCount", description: "Total shutter actuations on the camera", example: "45230" },
      { field: "ImageAuthentication", description: "Nikon image authentication status", example: "Off" },
    ],
    popularModels: [
      { name: "Z 8", type: "Mirrorless", megapixels: 45.7, year: 2023 },
      { name: "Z 9", type: "Mirrorless", megapixels: 45.7, year: 2021 },
      { name: "Z 6III", type: "Mirrorless", megapixels: 24.5, year: 2024 },
      { name: "Z 5", type: "Mirrorless", megapixels: 24.3, year: 2020 },
      { name: "D850", type: "DSLR", megapixels: 45.7, year: 2017 },
      { name: "D780", type: "DSLR", megapixels: 24.5, year: 2020 },
      { name: "Z fc", type: "Mirrorless (APS-C)", megapixels: 20.9, year: 2021 },
      { name: "Z 50", type: "Mirrorless (APS-C)", megapixels: 20.9, year: 2019 },
    ],
    exifTips: [
      "Nikon stores the ShutterCount in MakerNote data, which reveals how many photos have been taken with the camera — useful when buying used gear.",
      "The Make field in Nikon EXIF always reads 'NIKON CORPORATION' in all caps, which is distinctive for identification.",
      "Nikon's Active D-Lighting setting is recorded in EXIF and affects how shadows and highlights are rendered in JPEGs.",
      "NEF raw files contain both a full-size preview JPEG and the raw sensor data, each with their own metadata.",
      "Nikon cameras record VR (Vibration Reduction) mode in EXIF, helping you verify stabilization was active.",
    ],
    faqs: [
      {
        question: "What EXIF data do Nikon cameras record?",
        answer:
          "Nikon cameras record standard EXIF fields plus extensive MakerNote data including AF point used, Active D-Lighting level, VR mode, high ISO noise reduction setting, shutter count, and Picture Control parameters.",
      },
      {
        question: "Can I find the shutter count in Nikon EXIF data?",
        answer:
          "Yes. Nikon embeds the total shutter actuation count in the MakerNote section of EXIF data. You can read it using tools like ExifTool or by uploading the photo to a metadata viewer. This is useful for assessing wear on used cameras.",
      },
      {
        question: "What is Nikon's NEF raw format?",
        answer:
          "NEF (Nikon Electronic Format) is Nikon's proprietary raw file format. It stores unprocessed sensor data along with extensive EXIF metadata, MakerNote data, and an embedded JPEG preview. NEF files are typically 25-60 MB depending on the camera resolution.",
      },
    ],
  },
  {
    slug: "sony",
    name: "Sony",
    overview:
      "Sony entered the camera market through its acquisition of Konica Minolta's camera division in 2006, inheriting the A-mount system. Sony quickly established itself as an innovator, launching the first full-frame mirrorless camera (the A7) in 2013 and pioneering features like in-body image stabilization and real-time eye autofocus.",
    marketPosition:
      "Sony is the market leader in full-frame mirrorless cameras and the largest supplier of image sensors to other camera manufacturers. Their Alpha (A) series cameras are the go-to choice for many professional videographers and hybrid photo/video shooters.",
    rawFormat: "ARW (Alpha Raw)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "SONY" },
      { field: "Model", description: "Camera body model", example: "ILCE-7RM5" },
      { field: "LensModel", description: "Lens identifier", example: "FE 24-70mm F2.8 GM II" },
      { field: "LensID", description: "Numeric lens identification", example: "SEL2470GM2" },
      { field: "Software", description: "Firmware version", example: "ILCE-7RM5 v2.01" },
      { field: "ReleaseMode", description: "Shooting drive mode", example: "Normal" },
    ],
    makerNoteFields: [
      { field: "CreativeStyle", description: "Picture profile or creative style", example: "Standard" },
      { field: "ColorTemperature", description: "White balance color temperature in Kelvin", example: "5500" },
      { field: "DynamicRangeOptimizer", description: "DRO setting for shadow recovery", example: "Auto" },
      { field: "FocusMode2", description: "Detailed AF mode", example: "AF-C" },
      { field: "AFAreaModeSetting", description: "AF area selection mode", example: "Wide" },
      { field: "FlexibleSpotPosition", description: "Position of flexible spot AF point", example: "960 640" },
      { field: "SonyImageHeight", description: "Actual image height in pixels", example: "6336" },
      { field: "Quality2", description: "Image quality setting with details", example: "RAW + JPEG Fine" },
    ],
    popularModels: [
      { name: "A7R V", type: "Mirrorless", megapixels: 61, year: 2022 },
      { name: "A7 IV", type: "Mirrorless", megapixels: 33, year: 2021 },
      { name: "A7C II", type: "Mirrorless (Compact)", megapixels: 33, year: 2023 },
      { name: "A9 III", type: "Mirrorless", megapixels: 24.6, year: 2024 },
      { name: "A1", type: "Mirrorless", megapixels: 50.1, year: 2021 },
      { name: "A6700", type: "Mirrorless (APS-C)", megapixels: 26, year: 2023 },
      { name: "ZV-E10 II", type: "Mirrorless (Vlog)", megapixels: 26, year: 2024 },
      { name: "RX100 VII", type: "Compact", megapixels: 20.1, year: 2019 },
    ],
    exifTips: [
      "Sony uses internal model codes like 'ILCE-7RM5' instead of marketing names like 'A7R V'. The EXIF Model field shows the internal code.",
      "Sony ARW files contain extensive metadata about the autofocus system, including exact AF point positions.",
      "Look for the CreativeStyle or PictureProfile field to see which color profile was applied in-camera.",
      "Sony cameras record DynamicRangeOptimizer settings, which affect shadow detail in JPEG output.",
      "The LensID field uses Sony's internal lens database codes, which can identify even third-party lenses.",
    ],
    faqs: [
      {
        question: "What does ILCE mean in Sony EXIF data?",
        answer:
          "ILCE stands for Interchangeable Lens Camera with E-mount. It is Sony's internal designation for their mirrorless Alpha cameras. For example, ILCE-7RM5 is the Sony A7R V. The EXIF Model field always shows this internal code rather than the marketing name.",
      },
      {
        question: "What raw format do Sony cameras use?",
        answer:
          "Sony cameras use the ARW (Alpha Raw) format. ARW files contain the unprocessed sensor data, a JPEG preview, and extensive metadata including Sony-specific MakerNote fields for autofocus, creative styles, and lens corrections.",
      },
      {
        question: "Do Sony cameras embed GPS in EXIF?",
        answer:
          "Some Sony cameras like the A7C II and A7R V have built-in GPS. Others can transfer location data from a paired smartphone via the Imaging Edge Mobile app, which gets embedded in the EXIF GPS fields. Bluetooth-connected phones can also provide location tagging.",
      },
    ],
  },
  {
    slug: "fujifilm",
    name: "Fujifilm",
    overview:
      "Fujifilm Holdings Corporation, founded in 1934, has a storied history in photographic film before transitioning to digital cameras. Fujifilm is renowned for its retro-styled mirrorless cameras that feature physical dials for aperture, shutter speed, and ISO, recalling the experience of shooting film cameras.",
    marketPosition:
      "Fujifilm occupies a unique niche with its X-series APS-C and GFX medium-format mirrorless systems. They are especially popular among street photographers, travel photographers, and enthusiasts who appreciate Fujifilm's signature film simulation modes that emulate classic film stocks.",
    rawFormat: "RAF (Fujifilm Raw Format)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "FUJIFILM" },
      { field: "Model", description: "Camera body model", example: "X-T5" },
      { field: "LensModel", description: "Lens identifier", example: "XF23mmF1.4 R LM WR" },
      { field: "Software", description: "Firmware version", example: "Digital Camera X-T5 Ver4.10" },
      { field: "Saturation", description: "Film simulation applied", example: "Normal" },
    ],
    makerNoteFields: [
      { field: "FilmMode", description: "Film simulation mode applied", example: "Velvia/Vivid" },
      { field: "DynamicRange", description: "Dynamic range expansion setting", example: "DR200" },
      { field: "WhiteBalanceFineTune", description: "Fine WB adjustment on Red-Blue/Green-Magenta axes", example: "R+2, B-1" },
      { field: "NoiseReduction", description: "In-camera noise reduction level", example: "0 (Normal)" },
      { field: "Clarity", description: "Clarity/texture adjustment", example: "+2" },
      { field: "GrainEffect", description: "Film grain simulation setting", example: "Strong, Large" },
      { field: "ColorChromeFX Blue", description: "Blue color enhancement effect", example: "Strong" },
      { field: "RatingDevelopment", description: "In-camera rating status", example: "3 Stars" },
    ],
    popularModels: [
      { name: "X-T5", type: "Mirrorless (APS-C)", megapixels: 40.2, year: 2022 },
      { name: "X-H2S", type: "Mirrorless (APS-C)", megapixels: 26.1, year: 2022 },
      { name: "X-H2", type: "Mirrorless (APS-C)", megapixels: 40.2, year: 2022 },
      { name: "X100VI", type: "Compact (APS-C)", megapixels: 40.2, year: 2024 },
      { name: "X-S20", type: "Mirrorless (APS-C)", megapixels: 26.1, year: 2023 },
      { name: "GFX 100 II", type: "Medium Format", megapixels: 102, year: 2023 },
      { name: "GFX 50S II", type: "Medium Format", megapixels: 51.4, year: 2021 },
      { name: "X-T30 II", type: "Mirrorless (APS-C)", megapixels: 26.1, year: 2021 },
    ],
    exifTips: [
      "The FilmMode MakerNote field tells you which film simulation was used — Velvia, Provia, Classic Neg, Acros, etc. This is unique to Fujifilm.",
      "Fujifilm's RAF files use a unique X-Trans sensor layout. The EXIF does not indicate this directly, but third-party software may note it.",
      "GrainEffect and ColorChromeFX fields in MakerNote reveal Fujifilm's in-camera film emulation settings.",
      "Fujifilm uses 'FUJIFILM' (all caps) in the Make field, which can help filter photos by brand.",
      "The DynamicRange field shows DR100, DR200, or DR400 — indicating how many stops of extra highlight recovery were applied.",
    ],
    faqs: [
      {
        question: "How do I find which film simulation was used in a Fujifilm photo?",
        answer:
          "The film simulation is stored in the Fujifilm MakerNote as the FilmMode field. Common values include Provia/Standard, Velvia/Vivid, Astia/Soft, Classic Chrome, Classic Neg, Acros, and Eterna. Use a metadata viewer that reads MakerNote data to find this field.",
      },
      {
        question: "What is Fujifilm's RAF raw format?",
        answer:
          "RAF is Fujifilm's proprietary raw format. It stores unprocessed sensor data from Fujifilm's X-Trans or Bayer sensors, along with EXIF metadata and Fujifilm-specific MakerNote data including film simulation, grain effect, and dynamic range settings.",
      },
      {
        question: "Does the Fujifilm X100VI have GPS?",
        answer:
          "The Fujifilm X100VI does not have a built-in GPS receiver, but it supports Bluetooth location tagging when paired with a smartphone running the FUJIFILM XApp. Location data transferred this way appears in standard EXIF GPS fields.",
      },
    ],
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    overview:
      "Panasonic (Matsushita Electric) entered the digital camera market in the early 2000s and formed a partnership with Leica for lens design. Panasonic was one of the first manufacturers to fully embrace the Micro Four Thirds standard, producing the first mirrorless camera (the Lumix G1) in 2008.",
    marketPosition:
      "Panasonic competes in two segments: Micro Four Thirds with their G-series cameras and full-frame with their S-series cameras using the L-Mount Alliance (shared with Leica and Sigma). Panasonic is especially strong in video features, making their cameras popular with videographers.",
    rawFormat: "RW2 (Panasonic Raw)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "Panasonic" },
      { field: "Model", description: "Camera body model", example: "DC-S5M2" },
      { field: "LensModel", description: "Lens identifier", example: "LUMIX S 24-105/F4" },
      { field: "Software", description: "Firmware version", example: "Ver.2.4" },
      { field: "LensSerialNumber", description: "Lens serial number", example: "01AB12345" },
    ],
    makerNoteFields: [
      { field: "PhotoStyle", description: "Photo style/picture profile applied", example: "Standard" },
      { field: "IntelligentResolution", description: "AI-based resolution enhancement", example: "Off" },
      { field: "NoiseReduction", description: "High ISO noise reduction level", example: "Standard (0)" },
      { field: "FocusMode", description: "Autofocus mode in use", example: "Continuous AF" },
      { field: "AFAreaMode", description: "Autofocus area selection mode", example: "Face/Eye Detection" },
      { field: "ImageStabilization", description: "Optical or body IS mode", example: "On, Mode 1" },
      { field: "HDR", description: "HDR shooting mode status", example: "Off" },
    ],
    popularModels: [
      { name: "Lumix S5 II", type: "Mirrorless", megapixels: 24.2, year: 2023 },
      { name: "Lumix S5 IIX", type: "Mirrorless", megapixels: 24.2, year: 2023 },
      { name: "Lumix S1H", type: "Mirrorless", megapixels: 24.2, year: 2019 },
      { name: "Lumix GH6", type: "Mirrorless (M4/3)", megapixels: 25.2, year: 2022 },
      { name: "Lumix GH7", type: "Mirrorless (M4/3)", megapixels: 25.2, year: 2024 },
      { name: "Lumix G9 II", type: "Mirrorless (M4/3)", megapixels: 25.2, year: 2023 },
      { name: "Lumix S1R", type: "Mirrorless", megapixels: 47.3, year: 2019 },
      { name: "Lumix FZ1000 II", type: "Bridge", megapixels: 20.1, year: 2019 },
    ],
    exifTips: [
      "Panasonic EXIF data includes the PhotoStyle field, which indicates the color profile applied (Standard, Vivid, Natural, L. Classic Neo, etc.).",
      "Panasonic records AFAreaMode showing whether face detection or subject tracking was used.",
      "The ImageStabilization field shows if Dual I.S. (body + lens) was active — useful for troubleshooting blurry shots.",
      "Panasonic Lumix cameras record video-specific metadata when shooting video, including codec and frame rate info in MakerNote.",
      "RW2 raw files contain the camera's lens correction profile data in their metadata.",
    ],
    faqs: [
      {
        question: "What EXIF data do Panasonic Lumix cameras record?",
        answer:
          "Panasonic Lumix cameras record standard EXIF fields plus MakerNote data including PhotoStyle (color profile), AF area mode, image stabilization status, noise reduction levels, and intelligent resolution settings. Video-capable models also embed codec and recording format metadata.",
      },
      {
        question: "What is Panasonic's RW2 raw format?",
        answer:
          "RW2 is Panasonic's proprietary raw format used across Lumix cameras. It contains unprocessed sensor data along with embedded lens correction profiles, EXIF metadata, and Panasonic-specific MakerNote fields.",
      },
      {
        question: "Do Panasonic cameras have GPS?",
        answer:
          "Most Panasonic Lumix cameras do not have built-in GPS. However, they support location tagging via Bluetooth when paired with the Lumix Sync smartphone app. The GPS coordinates are then written to standard EXIF GPS fields.",
      },
    ],
  },
  {
    slug: "olympus",
    name: "Olympus (OM System)",
    overview:
      "Olympus Corporation has a camera heritage dating back to 1936. Olympus co-developed the Micro Four Thirds standard with Panasonic and became known for compact, weather-sealed mirrorless cameras with outstanding in-body image stabilization. In 2021, Olympus transferred its imaging division to Japan Industrial Partners, which rebranded it as OM Digital Solutions (OM System).",
    marketPosition:
      "OM System (formerly Olympus) serves a dedicated niche of photographers who value compact size, extreme weather sealing, and class-leading image stabilization. The Micro Four Thirds sensor is smaller than APS-C, resulting in lighter lenses and bodies — ideal for travel and wildlife photography.",
    rawFormat: "ORF (Olympus Raw Format)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "OM Digital Solutions" },
      { field: "Model", description: "Camera body model", example: "OM-1 Mark II" },
      { field: "LensModel", description: "Lens identifier", example: "M.Zuiko Digital ED 12-100mm F4.0 IS PRO" },
      { field: "Software", description: "Firmware version", example: "Version 2.1" },
      { field: "ImageStabilization", description: "IBIS status", example: "On, Mode 1" },
    ],
    makerNoteFields: [
      { field: "FocusMode", description: "Autofocus mode setting", example: "C-AF+TR" },
      { field: "ArtFilter", description: "Art filter effect applied", example: "None" },
      { field: "PictureMode", description: "Picture mode/color profile", example: "Natural" },
      { field: "NoiseFilter", description: "Noise filter strength", example: "Standard" },
      { field: "StackedImage", description: "Number of frames in computational stack", example: "12" },
      { field: "ImageStabilization", description: "Detailed stabilization status", example: "5-Axis On" },
      { field: "SceneMode", description: "Scene detection result", example: "Standard" },
    ],
    popularModels: [
      { name: "OM-1 Mark II", type: "Mirrorless (M4/3)", megapixels: 20.4, year: 2024 },
      { name: "OM-1", type: "Mirrorless (M4/3)", megapixels: 20.4, year: 2022 },
      { name: "OM-5", type: "Mirrorless (M4/3)", megapixels: 20.4, year: 2022 },
      { name: "E-M1 Mark III", type: "Mirrorless (M4/3)", megapixels: 20.4, year: 2020 },
      { name: "E-M5 Mark III", type: "Mirrorless (M4/3)", megapixels: 20.4, year: 2019 },
      { name: "E-P7", type: "Mirrorless (M4/3)", megapixels: 20.4, year: 2021 },
      { name: "TG-7", type: "Tough Compact", megapixels: 12, year: 2023 },
      { name: "E-M10 Mark IV", type: "Mirrorless (M4/3)", megapixels: 20.3, year: 2020 },
    ],
    exifTips: [
      "Olympus/OM System cameras store detailed image stabilization data, including the specific stabilization mode and axis information.",
      "The StackedImage field appears when using computational photography features like Live ND, Hi-Res Shot, or Focus Stacking.",
      "Older cameras use 'OLYMPUS CORPORATION' in the Make field; newer OM System cameras use 'OM Digital Solutions'.",
      "Art Filter metadata is preserved in EXIF, so you can identify which creative filter was applied to a JPEG.",
      "ORF raw files include a larger embedded JPEG preview than many competing formats.",
    ],
    faqs: [
      {
        question: "What happened to Olympus cameras?",
        answer:
          "Olympus sold its camera division to Japan Industrial Partners in 2021, and the brand was renamed OM Digital Solutions (marketed as OM System). The new company continues to develop Micro Four Thirds cameras and lenses using Olympus technology. EXIF data from new cameras shows 'OM Digital Solutions' as the Make.",
      },
      {
        question: "What is the ORF raw format?",
        answer:
          "ORF (Olympus Raw Format) is the proprietary raw format used by Olympus and OM System cameras. It contains unprocessed sensor data, EXIF metadata, MakerNote data specific to Olympus, and an embedded JPEG preview.",
      },
      {
        question: "Do Olympus cameras embed GPS data?",
        answer:
          "Some Olympus cameras like the TG-7 and OM-1 have built-in GPS. Other models support GPS logging via the OI.Share or OM Image Share smartphone app, which can sync location data to photos after the fact.",
      },
    ],
  },
  {
    slug: "leica",
    name: "Leica",
    overview:
      "Leica Camera AG, founded in 1914 in Wetzlar, Germany, is one of the most iconic names in photography. Leica invented the 35mm format for still photography and produced some of the most famous cameras in history, including the Leica M rangefinder series. Today, Leica continues to produce premium cameras and lenses known for exceptional optical quality.",
    marketPosition:
      "Leica occupies the ultra-premium segment of the camera market. Their M-series rangefinders, SL-series mirrorless cameras, and Q-series compacts command prices several times higher than comparable cameras from other brands. Leica is valued for its optical heritage, build quality, and distinct rendering.",
    rawFormat: "DNG (Adobe Digital Negative, open format)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "LEICA CAMERA AG" },
      { field: "Model", description: "Camera body model", example: "LEICA M11" },
      { field: "LensModel", description: "Lens identifier", example: "SUMMILUX-M 1:1.4/50 ASPH." },
      { field: "SerialNumber", description: "Camera body serial number", example: "5600001" },
      { field: "Software", description: "Firmware version", example: "M11-2.0.2" },
    ],
    makerNoteFields: [
      { field: "LensType", description: "Leica lens identification code", example: "Summilux-M 50mm f/1.4 ASPH" },
      { field: "ApproximateFocusDistance", description: "Estimated focus distance in meters", example: "1.2" },
      { field: "WhiteBalance", description: "White balance mode", example: "Auto" },
      { field: "CameraTemperature", description: "Internal camera temperature at time of capture", example: "28 C" },
      { field: "UserProfile", description: "Active user profile slot", example: "Profile 1" },
      { field: "ExternalSensorBrightnessValue", description: "Ambient light reading from external sensor", example: "12.5 EV" },
    ],
    popularModels: [
      { name: "M11", type: "Rangefinder", megapixels: 60, year: 2022 },
      { name: "M11-P", type: "Rangefinder", megapixels: 60, year: 2023 },
      { name: "Q3", type: "Compact (Full Frame)", megapixels: 60, year: 2023 },
      { name: "SL3", type: "Mirrorless", megapixels: 60, year: 2024 },
      { name: "SL2-S", type: "Mirrorless", megapixels: 24, year: 2020 },
      { name: "CL", type: "Mirrorless (APS-C)", megapixels: 24, year: 2017 },
      { name: "D-Lux 8", type: "Compact", megapixels: 17, year: 2024 },
      { name: "V-Lux 5", type: "Bridge", megapixels: 20.1, year: 2019 },
    ],
    exifTips: [
      "Leica cameras save DNG raw files by default, which is an open format that most software can read without special support.",
      "The M11 series records CameraTemperature in MakerNote data, which can be useful for correlating sensor noise to operating conditions.",
      "Leica M cameras require manual focus lenses. The ApproximateFocusDistance field uses the rangefinder mechanism to estimate distance.",
      "The serial number in EXIF can identify the exact production run and year of manufacture for Leica cameras.",
      "The M11-P embeds Content Authenticity Initiative (CAI) provenance data in photos — a feature for verifying image authenticity.",
    ],
    faqs: [
      {
        question: "What raw format do Leica cameras use?",
        answer:
          "Leica cameras use DNG (Adobe Digital Negative), which is an open raw format. Unlike proprietary formats from Canon or Nikon, DNG files can be opened by virtually any photo editing software without needing updates for new camera models.",
      },
      {
        question: "What is special about Leica EXIF data?",
        answer:
          "Leica EXIF data includes unique MakerNote fields like CameraTemperature, ApproximateFocusDistance (from the rangefinder mechanism), and detailed lens identification codes. The M11-P also embeds Content Authenticity Initiative (CAI) provenance metadata.",
      },
      {
        question: "Do Leica cameras have GPS?",
        answer:
          "The Leica Q3 and SL3 have built-in GPS. The M11 series does not have built-in GPS but can receive location data from the Leica FOTOS smartphone app via Bluetooth, which is then embedded in EXIF GPS fields.",
      },
    ],
  },
  {
    slug: "pentax",
    name: "Pentax",
    overview:
      "Pentax, originally Asahi Optical Co. (founded 1919), has a long history of producing cameras and lenses. Pentax was a pioneer of the SLR camera format and the K-mount lens system introduced in 1975 remains in use today. Now owned by Ricoh Imaging, Pentax continues to focus exclusively on DSLRs and film cameras while other brands have shifted to mirrorless.",
    marketPosition:
      "Pentax occupies a niche position as the only major brand still developing new DSLRs. They appeal to photographers who prefer optical viewfinders, weather-sealed bodies, and the extensive library of K-mount lenses spanning nearly 50 years. Pentax also offers medium format cameras in the 645 series.",
    rawFormat: "PEF (Pentax Electronic Format), DNG (optional)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "RICOH IMAGING COMPANY, LTD." },
      { field: "Model", description: "Camera body model", example: "PENTAX K-3 Mark III" },
      { field: "LensModel", description: "Lens identifier", example: "smc PENTAX-DA* 16-50mm F2.8 ED AL [IF] SDM" },
      { field: "Software", description: "Firmware version", example: "K-3 Mark III Ver. 1.41" },
      { field: "BodySerialNumber", description: "Camera body serial number", example: "1234567" },
    ],
    makerNoteFields: [
      { field: "ShakeReduction", description: "Sensor-shift stabilization status", example: "On" },
      { field: "DriveMode", description: "Shooting drive mode", example: "Single-frame" },
      { field: "PixelShiftResolution", description: "Pixel shift multi-shot mode", example: "Off" },
      { field: "AstroTracerEnabled", description: "AstroTracer star-tracking feature status", example: "Off" },
      { field: "HighISONoiseReduction", description: "High ISO noise reduction setting", example: "Standard" },
      { field: "CustomPictureStyle", description: "Active custom image preset", example: "Bright" },
      { field: "HDR", description: "HDR capture mode", example: "Off" },
    ],
    popularModels: [
      { name: "K-3 Mark III", type: "DSLR (APS-C)", megapixels: 25.7, year: 2021 },
      { name: "K-3 Mark III Monochrome", type: "DSLR (APS-C)", megapixels: 25.7, year: 2023 },
      { name: "K-1 Mark II", type: "DSLR", megapixels: 36.4, year: 2018 },
      { name: "KF", type: "DSLR (APS-C)", megapixels: 24.2, year: 2022 },
      { name: "645Z", type: "Medium Format DSLR", megapixels: 51.4, year: 2014 },
      { name: "K-70", type: "DSLR (APS-C)", megapixels: 24.2, year: 2016 },
      { name: "17 (Film)", type: "Half-Frame Film", megapixels: 0, year: 2023 },
      { name: "GR III", type: "Compact (Ricoh)", megapixels: 24.2, year: 2019 },
    ],
    exifTips: [
      "Pentax EXIF shows 'RICOH IMAGING COMPANY, LTD.' as the Make field, since Pentax is owned by Ricoh.",
      "The AstroTracer field is unique to Pentax — it records when the sensor-shift mechanism was used to track stars for astrophotography.",
      "Pentax PixelShiftResolution metadata indicates when the multi-shot high-resolution mode was used.",
      "Pentax K-mount lenses from any era are identified in EXIF, including vintage manual-focus lenses when set up in the camera.",
      "PEF raw files contain more Pentax-specific data than DNG files from the same camera, since DNG standardizes the metadata format.",
    ],
    faqs: [
      {
        question: "What EXIF data is unique to Pentax cameras?",
        answer:
          "Pentax cameras record unique MakerNote fields including AstroTracer status (star-tracking for astrophotography), ShakeReduction (sensor-shift stabilization), PixelShiftResolution (multi-shot mode), and detailed K-mount lens identification that works even with 50-year-old manual lenses.",
      },
      {
        question: "Why does Pentax EXIF say Ricoh?",
        answer:
          "Ricoh acquired the Pentax camera brand in 2011. Since then, the EXIF Make field reads 'RICOH IMAGING COMPANY, LTD.' while the Model field still uses the Pentax brand name (e.g., PENTAX K-3 Mark III).",
      },
      {
        question: "What is Pentax AstroTracer in EXIF?",
        answer:
          "AstroTracer is a Pentax feature that uses the camera's GPS and sensor-shift mechanism to track the apparent motion of stars, allowing longer exposures without star trails. When active, this is recorded in the EXIF MakerNote data.",
      },
    ],
  },
  {
    slug: "samsung",
    name: "Samsung",
    overview:
      "Samsung Electronics, the South Korean technology giant, produced dedicated digital cameras from the early 2000s through 2015, including the innovative NX mirrorless system. While Samsung exited the standalone camera market, they remain one of the largest camera manufacturers in the world through their Galaxy smartphone line, which is the primary source of Samsung-branded EXIF data today.",
    marketPosition:
      "Samsung is the world's largest smartphone manufacturer, and Galaxy phones are one of the most common sources of digital photos globally. Samsung's phone cameras feature advanced computational photography, multi-lens arrays, and AI-powered processing, generating distinctive EXIF data.",
    rawFormat: "DNG (Galaxy phones), SRW (discontinued NX cameras)",
    commonExifFields: [
      { field: "Make", description: "Device manufacturer", example: "samsung" },
      { field: "Model", description: "Device model", example: "SM-S928U" },
      { field: "Software", description: "Android/One UI version", example: "S928USQS4AXK1" },
      { field: "ImageWidth", description: "Image width in pixels", example: "4000" },
      { field: "ImageHeight", description: "Image height in pixels", example: "3000" },
      { field: "FocalLength", description: "Equivalent focal length", example: "6.3 mm" },
    ],
    makerNoteFields: [
      { field: "FaceDetect", description: "Number of faces detected in the scene", example: "2" },
      { field: "FaceRecognition", description: "Whether face recognition was used", example: "Yes" },
      { field: "DeviceType", description: "Type of device", example: "Cell Phone" },
      { field: "Samsung_LensType", description: "Which camera module was used", example: "Wide" },
      { field: "Samsung_MCCData", description: "Multi-camera control data", example: "[binary data]" },
      { field: "HDRSetting", description: "HDR mode status", example: "Auto HDR" },
    ],
    popularModels: [
      { name: "Galaxy S24 Ultra", type: "Smartphone", megapixels: 200, year: 2024 },
      { name: "Galaxy S24", type: "Smartphone", megapixels: 50, year: 2024 },
      { name: "Galaxy S23 Ultra", type: "Smartphone", megapixels: 200, year: 2023 },
      { name: "Galaxy Z Fold 5", type: "Smartphone (Foldable)", megapixels: 50, year: 2023 },
      { name: "Galaxy Z Flip 5", type: "Smartphone (Foldable)", megapixels: 12, year: 2023 },
      { name: "Galaxy A54 5G", type: "Smartphone", megapixels: 50, year: 2023 },
      { name: "Galaxy S21 Ultra", type: "Smartphone", megapixels: 108, year: 2021 },
      { name: "Galaxy NX", type: "Mirrorless (Discontinued)", megapixels: 20.3, year: 2013 },
    ],
    exifTips: [
      "Samsung uses lowercase 'samsung' in the Make field, which is unusual among manufacturers.",
      "Galaxy phone model numbers (e.g., SM-S928U) in EXIF don't clearly indicate the marketing name. SM-S928U is the Galaxy S24 Ultra.",
      "Samsung phones record which camera module (wide, ultrawide, telephoto) was used in MakerNote data.",
      "The Software field contains the firmware build number, which can identify the exact Android/One UI version.",
      "Samsung Galaxy phones embed GPS data by default. Disable it in Camera Settings > Location tags.",
    ],
    faqs: [
      {
        question: "What EXIF data do Samsung Galaxy phones store?",
        answer:
          "Samsung Galaxy phones store standard EXIF fields including GPS coordinates, date/time, camera settings, plus Samsung-specific MakerNote data like face detection count, which camera module was used (wide, ultrawide, telephoto), HDR settings, and device firmware version.",
      },
      {
        question: "How do I find the Galaxy model name from EXIF?",
        answer:
          "Samsung EXIF data shows internal model numbers like SM-S928U instead of marketing names like Galaxy S24 Ultra. You can look up the model number on Samsung's website or GSMArena to find the corresponding marketing name.",
      },
      {
        question: "Do Samsung phones embed location in photos?",
        answer:
          "Yes, Samsung Galaxy phones embed GPS coordinates in photos by default. To disable this, open the Camera app, tap the gear icon for Settings, and toggle off 'Location tags'. Already-taken photos will retain their GPS data until you strip it.",
      },
    ],
  },
  {
    slug: "apple",
    name: "Apple (iPhone)",
    overview:
      "Apple revolutionized mobile photography when the iPhone launched in 2007. Today, the iPhone is the most widely used camera in the world, generating more photos than any other device. Apple has consistently pushed computational photography forward with features like Smart HDR, Deep Fusion, Night Mode, Photographic Styles, and the Photonic Engine.",
    marketPosition:
      "The iPhone is the world's most popular camera by volume of photos taken. Apple's tight hardware-software integration enables advanced computational photography that often rivals or exceeds traditional cameras in challenging conditions. The iPhone's camera improvements are a major driver of annual upgrade cycles.",
    rawFormat: "DNG (Apple ProRAW, iPhone Pro models only)",
    commonExifFields: [
      { field: "Make", description: "Device manufacturer", example: "Apple" },
      { field: "Model", description: "Device model", example: "iPhone 15 Pro Max" },
      { field: "LensModel", description: "Camera module used", example: "iPhone 15 Pro Max back triple camera 6.765mm f/1.78" },
      { field: "Software", description: "iOS version", example: "17.4.1" },
      { field: "LensMake", description: "Lens manufacturer", example: "Apple" },
      { field: "FocalLengthIn35mmFilm", description: "35mm equivalent focal length", example: "24" },
    ],
    makerNoteFields: [
      { field: "AccelerationVector", description: "Device orientation/tilt at capture", example: "-0.954, -0.078, -0.215" },
      { field: "HDRImageType", description: "Type of HDR processing applied", example: "HDR Image" },
      { field: "BurstUUID", description: "Unique identifier linking photos in a burst", example: "A1B2C3D4-E5F6-..." },
      { field: "ContentIdentifier", description: "Unique content ID for Live Photo video pairing", example: "12345ABC-DEF6-..." },
      { field: "ImageUniqueID", description: "Unique identifier for the image", example: "a1b2c3d4e5f6" },
      { field: "RunTime", description: "Time since device boot when photo was taken", example: "123456789000000" },
      { field: "LivePhotoVideoIndex", description: "Frame index in Live Photo", example: "0" },
    ],
    popularModels: [
      { name: "iPhone 15 Pro Max", type: "Smartphone", megapixels: 48, year: 2023 },
      { name: "iPhone 15 Pro", type: "Smartphone", megapixels: 48, year: 2023 },
      { name: "iPhone 15", type: "Smartphone", megapixels: 48, year: 2023 },
      { name: "iPhone 14 Pro", type: "Smartphone", megapixels: 48, year: 2022 },
      { name: "iPhone 14", type: "Smartphone", megapixels: 12, year: 2022 },
      { name: "iPhone 13 Pro", type: "Smartphone", megapixels: 12, year: 2021 },
      { name: "iPhone SE (3rd gen)", type: "Smartphone", megapixels: 12, year: 2022 },
      { name: "iPhone 16 Pro Max", type: "Smartphone", megapixels: 48, year: 2024 },
    ],
    exifTips: [
      "iPhone EXIF includes the full LensModel string with focal length and aperture, clearly showing which camera module was used.",
      "Apple embeds the iOS version in the Software field, making it easy to determine the operating system at the time of capture.",
      "The AccelerationVector in Apple MakerNote data reveals the exact tilt and orientation of the phone when the photo was taken.",
      "Live Photos include a ContentIdentifier that links the still image to its companion video file.",
      "iPhone photos embed GPS coordinates by default. Disable in Settings > Privacy & Security > Location Services > Camera.",
    ],
    faqs: [
      {
        question: "What EXIF data does the iPhone store?",
        answer:
          "iPhones store extensive EXIF data including GPS coordinates, date/time, camera module used (wide, ultrawide, telephoto), iOS version, focal length, aperture, ISO, shutter speed, and Apple-specific data like HDR processing type, acceleration vector, Live Photo identifiers, and burst UUIDs.",
      },
      {
        question: "How do I stop my iPhone from saving location in photos?",
        answer:
          "Go to Settings > Privacy & Security > Location Services > Camera and select 'Never'. This prevents GPS coordinates from being embedded in future photos. To remove location from existing photos, use the Photos app's share sheet and toggle off Location before sharing.",
      },
      {
        question: "What is Apple ProRAW?",
        answer:
          "Apple ProRAW is a DNG-based raw format available on iPhone Pro models. It combines computational photography processing (Smart HDR, Deep Fusion) with the flexibility of a raw file. ProRAW files are about 25 MB each and contain the same EXIF metadata as standard iPhone photos plus additional raw-specific fields.",
      },
    ],
  },
  {
    slug: "google",
    name: "Google (Pixel)",
    overview:
      "Google entered the smartphone hardware market with the Pixel line in 2016, and quickly established a reputation for producing some of the best smartphone cameras available. Google's approach emphasizes computational photography, using AI and machine learning to enhance image quality from relatively modest hardware. Features like Night Sight, Magic Eraser, and Real Tone have set industry standards.",
    marketPosition:
      "Google Pixel phones are considered the benchmark for computational photography. While Pixel has a smaller market share than Apple or Samsung, its camera technology influences the entire smartphone industry. Google's image processing pipeline and Tensor chip produce distinctive photo characteristics.",
    rawFormat: "DNG (via Camera app RAW mode)",
    commonExifFields: [
      { field: "Make", description: "Device manufacturer", example: "Google" },
      { field: "Model", description: "Device model", example: "Pixel 8 Pro" },
      { field: "Software", description: "Camera app and Android version", example: "HDR+ 1.0.540104767zd" },
      { field: "LensModel", description: "Camera module identifier", example: "Pixel 8 Pro back camera 6.9mm f/1.68" },
      { field: "FocalLengthIn35mmFilm", description: "35mm equivalent focal length", example: "24" },
      { field: "ImageDescription", description: "Scene description tag", example: "" },
    ],
    makerNoteFields: [
      { field: "HDRPlusMode", description: "HDR+ processing status", example: "Enhanced" },
      { field: "NightMode", description: "Night Sight mode status", example: "On" },
      { field: "MotionPhoto", description: "Whether motion photo (Top Shot) was captured", example: "1" },
      { field: "MicroVideoOffset", description: "Offset of embedded micro-video data", example: "1234567" },
      { field: "BurstID", description: "Unique identifier for burst sequence", example: "abc123def456" },
      { field: "SpecialTypeID", description: "Identifier for computational mode used", example: "3" },
    ],
    popularModels: [
      { name: "Pixel 9 Pro", type: "Smartphone", megapixels: 50, year: 2024 },
      { name: "Pixel 9", type: "Smartphone", megapixels: 50, year: 2024 },
      { name: "Pixel 8 Pro", type: "Smartphone", megapixels: 50, year: 2023 },
      { name: "Pixel 8", type: "Smartphone", megapixels: 50, year: 2023 },
      { name: "Pixel 8a", type: "Smartphone", megapixels: 64, year: 2024 },
      { name: "Pixel 7 Pro", type: "Smartphone", megapixels: 50, year: 2022 },
      { name: "Pixel 7a", type: "Smartphone", megapixels: 64, year: 2023 },
      { name: "Pixel Fold", type: "Smartphone (Foldable)", megapixels: 48, year: 2023 },
    ],
    exifTips: [
      "Google Pixel EXIF shows 'HDR+ 1.0...' in the Software field, indicating Google's computational photography pipeline was used.",
      "The MotionPhoto field indicates whether a short video clip was captured alongside the still image (similar to Apple's Live Photos).",
      "Pixel phones embed GPS data by default. Disable it in the Camera app under Settings > Save location.",
      "Night Sight processing is indicated in the metadata, helping identify low-light computational photos.",
      "Google's DNG raw files from Pixel phones contain a linear DNG profile with minimal processing applied.",
    ],
    faqs: [
      {
        question: "What EXIF data do Google Pixel phones record?",
        answer:
          "Pixel phones record standard EXIF fields plus Google-specific data including HDR+ processing mode, Night Sight status, motion photo indicators, burst sequence IDs, and the specific camera module used. The Software field identifies the Google Camera app version.",
      },
      {
        question: "What is HDR+ in Google Pixel EXIF?",
        answer:
          "HDR+ is Google's computational photography system that captures multiple frames and merges them for improved dynamic range, noise reduction, and detail. The EXIF Software field shows the HDR+ version, and MakerNote data indicates whether standard or enhanced HDR+ was used.",
      },
      {
        question: "Do Pixel phones save GPS in photos?",
        answer:
          "Yes, Google Pixel phones embed GPS coordinates in photos by default. To disable this, open the Camera app, go to Settings, and toggle off 'Save location'. The GPS data appears in standard EXIF GPSLatitude and GPSLongitude fields.",
      },
    ],
  },
  {
    slug: "huawei",
    name: "Huawei",
    overview:
      "Huawei Technologies, the Chinese technology company, became a major force in smartphone photography through its partnership with Leica, which ran from 2016 to 2022. Huawei pioneered several smartphone camera innovations including periscope zoom lenses, large RYYB sensors, and advanced AI photography. After the Leica partnership ended, Huawei continued to develop its XMAGE imaging system independently.",
    marketPosition:
      "Huawei was the world's second-largest smartphone maker before US trade restrictions limited its access to Google services and advanced chips. Their P-series and Mate-series phones remain strong in China and parts of Europe and Asia, known for their exceptional camera capabilities, especially in low light and zoom photography.",
    rawFormat: "DNG (via Pro mode in camera app)",
    commonExifFields: [
      { field: "Make", description: "Device manufacturer", example: "HUAWEI" },
      { field: "Model", description: "Device model", example: "NOH-AN00" },
      { field: "Software", description: "EMUI/HarmonyOS version", example: "NOH-AN00 4.0.0.171(C00E160R3P7)" },
      { field: "LensModel", description: "Camera module identifier", example: "camera" },
      { field: "FocalLength", description: "Physical focal length", example: "5.4 mm" },
      { field: "FocalLengthIn35mmFilm", description: "35mm equivalent focal length", example: "27" },
    ],
    makerNoteFields: [
      { field: "AIModeType", description: "AI scene detection result", example: "Food" },
      { field: "FrontCamera", description: "Whether the front camera was used", example: "0 (Rear)" },
      { field: "Face", description: "Face detection information", example: "Detected" },
      { field: "Beautymode", description: "Beauty/portrait enhancement mode", example: "Off" },
      { field: "CameraSerialNumber", description: "Camera module serial number", example: "ABC12345" },
    ],
    popularModels: [
      { name: "P60 Pro", type: "Smartphone", megapixels: 48, year: 2023 },
      { name: "Mate 60 Pro", type: "Smartphone", megapixels: 50, year: 2023 },
      { name: "P50 Pro", type: "Smartphone", megapixels: 50, year: 2021 },
      { name: "Mate 50 Pro", type: "Smartphone", megapixels: 50, year: 2022 },
      { name: "P40 Pro+", type: "Smartphone", megapixels: 50, year: 2020 },
      { name: "Mate 40 Pro", type: "Smartphone", megapixels: 50, year: 2020 },
      { name: "P30 Pro", type: "Smartphone", megapixels: 40, year: 2019 },
      { name: "Nova 12 Ultra", type: "Smartphone", megapixels: 50, year: 2024 },
    ],
    exifTips: [
      "Huawei uses internal model codes in EXIF (e.g., NOH-AN00 for P50 Pro). The marketing name is not directly in EXIF.",
      "The AIModeType field reveals what scene the AI detected (food, landscape, portrait, etc.), which affects processing.",
      "Huawei phones with Leica co-engineering may show Leica watermark metadata if the watermark feature was enabled.",
      "The Software field contains the full EMUI or HarmonyOS build number, revealing the exact firmware version.",
      "Huawei embeds GPS coordinates by default. Disable in Camera Settings > GPS tag or Location tag.",
    ],
    faqs: [
      {
        question: "What EXIF data do Huawei phones store?",
        answer:
          "Huawei phones store standard EXIF fields plus custom data including AI scene detection results, beauty mode settings, face detection information, and the camera module identifier. The Make field shows 'HUAWEI' and the Model shows an internal product code.",
      },
      {
        question: "Why does Huawei EXIF show a code instead of the phone name?",
        answer:
          "Huawei uses internal product codes in the EXIF Model field (e.g., NOH-AN00 for Mate 40 Pro, ELS-NX9 for P40 Pro). You can look up these codes on GSMArena or Huawei's website to find the corresponding marketing name.",
      },
      {
        question: "Do Huawei phones still use Leica technology?",
        answer:
          "Huawei's partnership with Leica ended in 2022. Phones released after that date (P60 series, Mate 60 series onward) use Huawei's own XMAGE imaging system. Older models like the P40 Pro and Mate 40 Pro featured Leica-branded optics and processing.",
      },
    ],
  },
  {
    slug: "dji",
    name: "DJI",
    overview:
      "DJI (Da-Jiang Innovations), founded in 2006 in Shenzhen, China, is the world's largest manufacturer of consumer and professional drones. DJI expanded into handheld cameras with the Osmo Action and Pocket series. DJI drones are responsible for a massive volume of aerial photography and videography worldwide, making DJI one of the most common sources of aerial photo EXIF data.",
    marketPosition:
      "DJI dominates the consumer and prosumer drone market with over 70% market share. Their Mavic, Air, Mini, and Inspire series drones, along with Osmo handheld cameras, produce photos with distinctive aerial EXIF data including GPS coordinates, altitude, gimbal angles, and flight parameters.",
    rawFormat: "DNG (drone cameras), JPEG (Osmo series)",
    commonExifFields: [
      { field: "Make", description: "Device manufacturer", example: "DJI" },
      { field: "Model", description: "Drone or camera model", example: "FC3582" },
      { field: "Software", description: "Firmware version", example: "v02.00.0700" },
      { field: "GPSAltitude", description: "Altitude above sea level", example: "156.2 m" },
      { field: "GPSLatitude", description: "Latitude coordinate", example: "32.7767 N" },
      { field: "GPSLongitude", description: "Longitude coordinate", example: "96.7970 W" },
    ],
    makerNoteFields: [
      { field: "AbsoluteAltitude", description: "Absolute altitude in meters", example: "+156.20" },
      { field: "RelativeAltitude", description: "Height above takeoff point", example: "+120.00" },
      { field: "GimbalRollDegree", description: "Gimbal roll angle", example: "+0.00" },
      { field: "GimbalYawDegree", description: "Gimbal yaw (heading) angle", example: "+145.30" },
      { field: "GimbalPitchDegree", description: "Gimbal pitch (tilt) angle", example: "-90.00" },
      { field: "FlightRollDegree", description: "Aircraft roll angle at capture", example: "+0.50" },
      { field: "FlightYawDegree", description: "Aircraft heading at capture", example: "+145.30" },
      { field: "FlightPitchDegree", description: "Aircraft pitch angle at capture", example: "-1.20" },
      { field: "SpeedX", description: "Aircraft speed on X axis", example: "0.0" },
      { field: "SpeedY", description: "Aircraft speed on Y axis", example: "0.0" },
      { field: "SpeedZ", description: "Aircraft vertical speed", example: "0.0" },
    ],
    popularModels: [
      { name: "Mavic 3 Pro", type: "Drone", megapixels: 20, year: 2023 },
      { name: "Mavic 3 Classic", type: "Drone", megapixels: 20, year: 2022 },
      { name: "Air 3", type: "Drone", megapixels: 48, year: 2023 },
      { name: "Mini 4 Pro", type: "Drone", megapixels: 48, year: 2023 },
      { name: "Mini 3 Pro", type: "Drone", megapixels: 48, year: 2022 },
      { name: "Inspire 3", type: "Professional Drone", megapixels: 20, year: 2023 },
      { name: "Osmo Pocket 3", type: "Handheld Gimbal", megapixels: 20, year: 2023 },
      { name: "Osmo Action 4", type: "Action Camera", megapixels: 20, year: 2023 },
    ],
    exifTips: [
      "DJI drone photos contain both absolute altitude (above sea level) and relative altitude (above takeoff point) in metadata.",
      "Gimbal angle metadata reveals the exact camera orientation — pitch of -90 degrees means the camera was pointed straight down.",
      "DJI uses internal model codes in the EXIF Model field (e.g., FC3582 for Mavic 3). These don't match marketing names directly.",
      "Flight speed data (SpeedX, SpeedY, SpeedZ) is recorded at the moment of capture — useful for motion blur analysis.",
      "DJI drone photos always contain GPS data since GPS is required for flight. This cannot be disabled in most models.",
    ],
    faqs: [
      {
        question: "What EXIF data do DJI drones store?",
        answer:
          "DJI drones store extensive EXIF data including GPS coordinates, absolute and relative altitude, gimbal angles (roll, pitch, yaw), aircraft orientation, flight speed on all three axes, camera settings, and firmware version. This makes DJI drone photos among the most metadata-rich of any camera type.",
      },
      {
        question: "Can I remove GPS data from DJI drone photos?",
        answer:
          "Yes, you can strip GPS and all other metadata from DJI drone photos using a metadata removal tool. However, note that DJI drones always record GPS during flight since it is essential for navigation. The GPS data is embedded in every photo and video by default.",
      },
      {
        question: "What does the DJI model code in EXIF mean?",
        answer:
          "DJI uses internal camera model codes in the EXIF Model field. For example, FC3582 is the Mavic 3, FC3411 is the Mini 3 Pro, and L2D-20c is the Mavic 3 Pro Hasselblad camera. These codes identify the camera module rather than the drone itself.",
      },
    ],
  },
  {
    slug: "gopro",
    name: "GoPro",
    overview:
      "GoPro, Inc., founded in 2002 by Nick Woodman, revolutionized action photography and videography with its small, rugged, waterproof cameras. GoPro cameras are designed for extreme sports and adventure activities, and they embed unique metadata including accelerometer data, gyroscope readings, and GPS tracks that record the full motion of the camera during capture.",
    marketPosition:
      "GoPro is the dominant brand in the action camera market. Their HERO series cameras are the standard for sports, adventure, and underwater photography. GoPro's telemetry data stream (GPMF) is unique in the camera industry, providing motion and sensor data that no other consumer camera records.",
    rawFormat: "GPR (GoPro Raw, based on DNG)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "GoPro" },
      { field: "Model", description: "Camera model", example: "HERO12 Black" },
      { field: "Software", description: "Firmware version", example: "H23.01.01.10.00" },
      { field: "FieldOfView", description: "Field of view setting", example: "Wide" },
      { field: "GPSLatitude", description: "Latitude coordinate", example: "37.7749 N" },
      { field: "GPSLongitude", description: "Longitude coordinate", example: "122.4194 W" },
    ],
    makerNoteFields: [
      { field: "AutoRotation", description: "Whether auto-rotation was applied", example: "Auto" },
      { field: "DigitalZoom", description: "Digital zoom factor", example: "1.0" },
      { field: "ProTune", description: "ProTune advanced settings status", example: "On" },
      { field: "WhiteBalance", description: "White balance setting in ProTune", example: "Auto" },
      { field: "Sharpness", description: "Sharpness level", example: "High" },
      { field: "ColorMode", description: "Color profile", example: "GoPro" },
      { field: "CameraSerialNumber", description: "Camera serial number", example: "C1234567890" },
    ],
    popularModels: [
      { name: "HERO13 Black", type: "Action Camera", megapixels: 27, year: 2024 },
      { name: "HERO12 Black", type: "Action Camera", megapixels: 27, year: 2023 },
      { name: "HERO11 Black", type: "Action Camera", megapixels: 27, year: 2022 },
      { name: "HERO11 Black Mini", type: "Action Camera", megapixels: 27, year: 2022 },
      { name: "HERO10 Black", type: "Action Camera", megapixels: 23, year: 2021 },
      { name: "HERO9 Black", type: "Action Camera", megapixels: 20, year: 2020 },
      { name: "MAX", type: "360 Camera", megapixels: 16.6, year: 2019 },
      { name: "HERO8 Black", type: "Action Camera", megapixels: 12, year: 2019 },
    ],
    exifTips: [
      "GoPro EXIF includes the FieldOfView setting (Wide, Linear, Narrow, SuperView), which affects the apparent focal length.",
      "GoPro videos contain GPMF (GoPro Metadata Format) telemetry with accelerometer, gyroscope, and GPS track data — far more than standard EXIF.",
      "ProTune settings are recorded in metadata, revealing whether advanced color, white balance, and sharpness controls were used.",
      "GoPro records GPS in both photos and videos. The GPS track in videos allows overlaying speed and altitude data.",
      "The GPR raw format is based on Adobe DNG, so it can be opened by most raw processing software.",
    ],
    faqs: [
      {
        question: "What EXIF data do GoPro cameras record?",
        answer:
          "GoPro cameras record standard EXIF fields plus GoPro-specific data including field of view mode, ProTune settings (color, sharpness, white balance), digital zoom factor, auto-rotation status, and GPS coordinates. Videos also include GPMF telemetry with accelerometer, gyroscope, and GPS track data.",
      },
      {
        question: "What is GoPro GPMF telemetry?",
        answer:
          "GPMF (GoPro Metadata Format) is a telemetry data stream embedded in GoPro videos. It records GPS position, speed, altitude, accelerometer data, gyroscope readings, and other sensor data multiple times per second. This data powers features like GPS speed overlays and horizon leveling.",
      },
      {
        question: "Does GoPro record GPS in photos?",
        answer:
          "Yes, GoPro cameras embed GPS coordinates in both photos and videos when GPS is enabled. It can take a few minutes for the GPS to lock after powering on. GPS can be toggled off in Preferences > General > GPS.",
      },
    ],
  },
  {
    slug: "hasselblad",
    name: "Hasselblad",
    overview:
      "Hasselblad, founded in 1941 in Gothenburg, Sweden, is one of the most legendary names in photography. Hasselblad cameras were used by NASA on every crewed space mission from Mercury through the Space Shuttle program, including capturing the iconic images from the Moon landings. Today, Hasselblad is owned by DJI and continues to produce ultra-premium medium format cameras.",
    marketPosition:
      "Hasselblad occupies the ultra-premium segment of the medium format camera market, competing with Fujifilm GFX and Phase One. Since DJI's acquisition in 2017, Hasselblad technology also appears in DJI's premium drones (Mavic 3 series). Hasselblad cameras are known for exceptional color science and resolution.",
    rawFormat: "3FR (Hasselblad Raw), DNG (optional)",
    commonExifFields: [
      { field: "Make", description: "Camera manufacturer", example: "Hasselblad" },
      { field: "Model", description: "Camera body model", example: "X2D 100C" },
      { field: "LensModel", description: "Lens identifier", example: "XCD 2,5/55V" },
      { field: "SerialNumber", description: "Camera body serial number", example: "RI0123456" },
      { field: "Software", description: "Firmware version", example: "1.4.0" },
      { field: "Copyright", description: "Embedded copyright notice", example: "" },
    ],
    makerNoteFields: [
      { field: "BodyType", description: "Camera body type identifier", example: "X2D" },
      { field: "LensType", description: "Hasselblad lens identification", example: "XCD 55V" },
      { field: "SensorWidth", description: "Physical sensor width in mm", example: "43.8" },
      { field: "SensorHeight", description: "Physical sensor height in mm", example: "32.9" },
      { field: "BaseISO", description: "Native base ISO of the sensor", example: "64" },
      { field: "CoatingCode", description: "Lens coating identification", example: "T*" },
    ],
    popularModels: [
      { name: "X2D 100C", type: "Medium Format Mirrorless", megapixels: 100, year: 2022 },
      { name: "X1D II 50C", type: "Medium Format Mirrorless", megapixels: 50, year: 2019 },
      { name: "907X 100C", type: "Medium Format Modular", megapixels: 100, year: 2023 },
      { name: "907X 50C", type: "Medium Format Modular", megapixels: 50, year: 2020 },
      { name: "H6D-400C MS", type: "Medium Format SLR", megapixels: 100, year: 2018 },
      { name: "H6D-100C", type: "Medium Format SLR", megapixels: 100, year: 2016 },
      { name: "CFV 100C", type: "Digital Back", megapixels: 100, year: 2023 },
      { name: "CFV II 50C", type: "Digital Back", megapixels: 50, year: 2020 },
    ],
    exifTips: [
      "Hasselblad EXIF includes sensor dimensions in millimeters, which is unusual and useful for calculating actual pixel pitch.",
      "The 3FR raw format is proprietary to Hasselblad and requires Phocus software or Adobe Camera Raw for processing.",
      "Hasselblad XCD lenses include a built-in central shutter, and the shutter speed metadata reflects this leaf shutter capability.",
      "Base ISO of 64 in Hasselblad metadata indicates the sensor's native sensitivity, which is lower than most cameras for maximum dynamic range.",
      "Hasselblad embeds detailed lens coating information (T*) in MakerNote data, reflecting their Zeiss heritage.",
    ],
    faqs: [
      {
        question: "What EXIF data do Hasselblad cameras store?",
        answer:
          "Hasselblad cameras store detailed EXIF data including sensor dimensions in millimeters, base ISO, lens coating codes, body and lens type identifiers, serial numbers, and all standard camera settings. The 100-megapixel sensors produce files with extremely detailed metadata.",
      },
      {
        question: "What is the 3FR raw format?",
        answer:
          "3FR is Hasselblad's proprietary raw format. It contains unprocessed data from Hasselblad's medium format sensors along with extensive EXIF and MakerNote metadata. 3FR files from the 100MP sensors can exceed 150 MB each. They can be processed in Hasselblad Phocus (free) or Adobe Camera Raw.",
      },
      {
        question: "Is Hasselblad related to DJI?",
        answer:
          "Yes, DJI acquired a majority stake in Hasselblad in 2017. This is why premium DJI drones like the Mavic 3 Pro feature Hasselblad-branded cameras. However, Hasselblad's standalone medium format cameras are designed and manufactured independently in Sweden.",
      },
    ],
  },
];

export function getBrandBySlug(slug: string): CameraBrand | undefined {
  return cameraBrands.find((brand) => brand.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return cameraBrands.map((brand) => brand.slug);
}
