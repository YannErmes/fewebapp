'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b70a3d3e6cdc1a04891b2fb0119fb4ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "010381505bd746b2c5c24863d13ef4df",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ca562dc81876309ed106f2bc64d14f7",
".git/logs/refs/heads/main": "823f69a775b7025afaa2619ffb8cf762",
".git/logs/refs/remotes/origin/main": "3c262f744125e6283a377e3dc19a9a55",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/6626547038a134dd9bc7cc9aba73454514f1be": "047413bc1add393aca4715b2ec6017e2",
".git/objects/10/91388046a970eaafe1144bbaeef747881c5c79": "ac4b96b2ae25a796aecf8e77b338de69",
".git/objects/11/40f5eb7314f698369099d11b56fbc255e2ad60": "60551ec73846f485f3e616106a55c198",
".git/objects/11/bdfab651a0434e8f8dd50b3096e5374104fc76": "2a03bb57cad0ee44ed80b49f87951d23",
".git/objects/12/cd0fbd34a6f05e9fa8f88cef4e0b34f69f8488": "cea7cd71e2c5db7f28fb77d038049dbb",
".git/objects/14/6ee574b13da736c7ffc95cea3edb1ee11e6161": "ad249e44b47000c91086c3d12b386e2d",
".git/objects/18/c4e7d7e7bf97d8f603094abcde06a7f96cacab": "a3aff1ce262a3f4cdb9ba901cbed757d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/3c2e3d57658d90c9c03348b2f9156e50711bb4": "4342255335b77612ad341213b2dd8084",
".git/objects/23/0e4c624a9fed28a456c005e8ff80669c7e2625": "c5df39af7908b97940c5accabea071a3",
".git/objects/26/af65aa33a371fdd7425a1cd4c310fdee95c3ed": "4ecb6be279c5a722697004ad02059477",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/3a/5027b4cc3cc36ba3b728a1b561745fdb436bac": "2386fdfd7a8e83e5af0cbbc2bfafcb1c",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/43/81260f17750c00bded513adbc8ba67a3c38473": "53e5beed449da24cbaa73b19dcdaf309",
".git/objects/44/fd1342297967b37cdb86974eeb3a88a0518658": "ad57ceeb0d48714728a518d797d96310",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/0696f3d0c85ae31ac698480023d78d84c8ee20": "77426f52ac19735c10d82b88ac8f7b89",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/f86705270b5571074d14159cc0d0b15ee2bc54": "db5a834f46ed4e3dd8fea805fdf6def8",
".git/objects/4d/a558d8c07b14c76d3866d80e90ec35ebec3803": "a1260f532d8bde6a4877fc66aaaa4ad4",
".git/objects/4e/fcf8374d9db9a8a86f9e5d84ef68594478f377": "54d01533028fd56e8f66053527e7c256",
".git/objects/55/daba7506a099715679a290beca307fb92723c6": "57395385a8f8ffd841965a3ab93d20ea",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5d/8a9925d6db008ac852edebb06b10cc578ad48a": "3150cc89762539b5154451343e552aec",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/55c1f28c1fbb35fb5d3aba39a5aa48a2024be6": "34f2664230062b20772169f242848a21",
".git/objects/6f/98535dbbfb486563f57e38760f7877462e9b55": "f339308ef258f1eb731f7bc039bc4863",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/d874d5e6c54addb6ec6a7a40140386a89f7a7e": "35dbc291a00458b467652ba17d4d6e89",
".git/objects/78/ba3e7f8c3d9ad22bbe8150eb73f55d1895587e": "0ff16b5629722c975d49442345c183f7",
".git/objects/83/71512af7092d54f56c5135a72d77e020d333b0": "0aea6d719478a590b3c40daeecc55a26",
".git/objects/84/70e7011191e76848803e8e2885e5f973eb99af": "3e29524eff9c4525265160fcc238413c",
".git/objects/87/0961206f62876b8c2a4444438e9e7e619222b9": "fe123f66e506143883d788d7cf9b28f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2098f2314ec452c24b37befa8c47bdebb2995b": "1ecd309835f7888c432fe724179861f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/3f45f029ba96aed0f556ad96b55f0b0802f1a1": "825171760e27d4fdc043feafa1c4f243",
".git/objects/8d/bac05fbabd4c3bf436575371fbe7f9307a2941": "c21bf10e31ea6a8b94be0c4219c9eb6f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a0/495dc6c71f62bd1cca40fa98145211cedb1601": "545637dd9d77eb9b5745ecb2e526d62c",
".git/objects/a1/43d650985edf66342d4e2c7c15b55903b69b91": "722b1bb3b9d09d27b9c6cb2c5a18d0b3",
".git/objects/a1/4a5b790fc9c6a6a19db3139fbd47bf00d6e095": "e02518a5bbaa25170fecea58d2d482a7",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/a6/431446c3c60bd2c2d2af862808a43563e5cbb5": "914d7e75bd0243e33a40ec16cf562623",
".git/objects/aa/33bf4e1b86fd5c756b2237bb6a4744deda04b5": "a7cbc821a6ec95502a226287fdeecbcd",
".git/objects/ac/4ce2197ffe895f2b4b70f17f41507f3b72ab73": "0a851c71a36886e4e52952294932e91d",
".git/objects/ac/67297a3138bff431af60e65a42cec74dfb819d": "6399336e12d3c01ec0d79fadc8547090",
".git/objects/b3/c67ead894181fd73498a6bdb20f3be5398d0f0": "209814fda6059537068138a516cf3049",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7ef5f104da6415cbc49e2e621fe7b1514a787e": "cb6b29dbc30235655d1ecd41cf97cb61",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/e706ef83b587a70efb23705c2254fb10fd8501": "1816068e695c280239d2360f79401481",
".git/objects/c6/2811510d58bd1330426cce7f008803046c530e": "64a1c765b62ddff9a06d969572892f0e",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/75e958b3b4436c828af6f2cd212270612f287b": "930d7b21567a23acfed9a6b9c54330b5",
".git/objects/cf/ae44cdda805230483204fe77458c2779219e13": "c8f593863f9d75e82e2a5f09594a1cae",
".git/objects/d1/06bd7cd4ee241662f4e6b3bbffe090329202a2": "03ab3b3f5e25815dad3b2bc81cc25e98",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/de/13f83c3ad3cbc11d1453c45417bf159d9d7348": "58512a39029fcf9e3e9e5286593bb67c",
".git/objects/df/e31bb073d32c0c0d57b848b331af37a36b3772": "58a65758da909c8ce4ec4a3812ff80cd",
".git/objects/e1/c8b58febf3c63445135eee38791ebf6581b2db": "1cc9fcf606400cced1fc98317d44171f",
".git/objects/e7/7b4b1235133cc1c68078804e49aba98d2aa45c": "8e8e8ce1c8a7e808a4e5ebce7fbc3fc0",
".git/objects/e9/0030e9377f041cea4b9d6da06b8e63c5853f6f": "befd6842160496674dc932f49fdc1714",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/19a488d8c3df5cf520361288b615a159d2def0": "b282bf254ccd76c102d03a94673f79a8",
".git/objects/f5/05dd5719fecae90e2b825482ec4d460cd9943c": "bafe2302edcd406fdaf6aa8263faf659",
".git/objects/fe/66636bacc392f08d1e9afb1871e05d63745f66": "8de8883b303766a25d54e69ff76e4722",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "aec1fd5070f50aafd7d087caa9b8addd",
".git/refs/remotes/origin/main": "aec1fd5070f50aafd7d087caa9b8addd",
"assets/AssetManifest.bin": "6e9f863d0492f0f28bab13c40e44f427",
"assets/AssetManifest.bin.json": "c4f8840eb0b8bc4a7439a8f7fff5c17f",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7254ec9c411a4b460ded6916b492e6ce",
"assets/NOTICES": "7b2877e27733ec4f9ae239091ea33ef0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "982f51d88f16a63a0e412bd10753af3a",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5469f26ffb70f1cd1379689d449a7d04",
"icons/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"icons/.git/config": "295d8046dbd8a2b99e0cb1b433a287f9",
"icons/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"icons/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"icons/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"icons/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"icons/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"icons/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"icons/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"icons/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"icons/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"icons/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"icons/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"icons/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"icons/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"icons/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"icons/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"icons/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"icons/.git/index": "442957d49f89656d82ef74507ed36caa",
"icons/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"icons/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"icons/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"icons/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"icons/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"icons/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42d0b1c4b7450e41f3f189a07cfc8be1",
"/": "42d0b1c4b7450e41f3f189a07cfc8be1",
"main.dart.js": "8bb360e9812dcffb18dcefffee7e6b97",
"manifest.json": "3140a597e707fbd821de8b150959764f",
"version.json": "6a1e28463ceb395ccbc01a28fe28aed1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
