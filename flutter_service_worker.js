'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "201d0e928c60cab094974e4541782f87",
".git/config": "9c3c92a5749c0a42339ba05b5bf6209e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "571b29c1967ed195e771453489ec98a1",
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
".git/index": "fe123ad146e8fc9ba4c42080a4aeb045",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a572fb758b2a2dd399180a637e2f875",
".git/logs/refs/heads/main": "c3ef2adb229d24c9246ed918aaf6b0a1",
".git/logs/refs/remotes/origin/main": "1a52d524f2392d6c964be60e3470b9b4",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0b/810007e75489923adeb1656ef04768e81d679f": "cc21a87000b8e360a460b054217b4922",
".git/objects/15/012f173acbe59874cb12553679698346e44270": "5f1a1ab41c445097b7f0f16da346a40c",
".git/objects/18/324744bf892c879af8a5ba2fcd5f35912e2706": "cc0b56a1110fed10374e8c4a83c39969",
".git/objects/18/7a7e1eb19c1107cb724e45a9937adbd1f10042": "9c2be3df8a0f38b64ba35c5641809ce4",
".git/objects/20/462b98129e7d537e8e2875d7d524f3ceb8da61": "de06ea7e67e21f79133c21f8d5bc92b3",
".git/objects/22/d1fe774903361a65380857ff414b9e7fa4edc7": "1095e1353ae8ad2efb7301953de45877",
".git/objects/24/d3c41611c9f0403417dec865bd140dcbe46fa1": "7a93cf007082cf74fccc6e7862231371",
".git/objects/2b/a6588e096a74ce97e16c6821280d20d45f61db": "decfea8c29a0ee80fb68d9e5f4bef38e",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/b8814aecf8ec43997e2093cfcb4cb739f8d705": "fb85de87c79af0fd83e29071fc246467",
".git/objects/3a/58c3e1bb9d803f540b9cb2a35e294c0b68eea0": "9bbe4c00f217c9667534810b8ebbe464",
".git/objects/3b/f677625618b04deaea89b09f674966824d735b": "daeb925509541feb67c9d6f3b64b39fa",
".git/objects/3f/6870b6613be6cd928fe2d5d9da2a2477ebf555": "8ad647f49c051c316800456299d3a3d6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/8228d7519d142c6980c86986fb61122e2c82ef": "da145d4a7fe54edba6a3a5902caf7d03",
".git/objects/50/a0c0f0f601e8ee3817961c060c482634dd055a": "0554f1ca04c3b95b74bf415a7c15caea",
".git/objects/54/58a14c77194dd7d5e50470a38b71c5914c346d": "5cc7833375b52df036555333b1cf81bc",
".git/objects/56/b8d6f4066e1bb28977017728dd62324ec514ed": "ffe9c0f3078d04b5fb6c8b111901648d",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/7d47927616952e5cceadba6d645c76d30ff57c": "339444c7147ff408705845b224c4cc94",
".git/objects/59/dbac6e4697892f55cc3121820bb426dc88399f": "0fb1d73db90b988937410e5e132dbcf9",
".git/objects/5e/58751f8ebfa966f15e116ff428e15ccc1f9c5c": "64196dd781376147fbcb1a130f17bf1f",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/b21df29fbbb324c7b4ff252e7d2f0f06318976": "0d118341168a56694d966e77b64bc230",
".git/objects/68/889897f3780499963e133e43f616e0f5fb7b84": "760633b2c6763fdb4f38257bf916fb6c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/0c227054fea6f044bd21800cc19190b2fbf267": "e5ffea7c02bfee5c19c39bed42f9da65",
".git/objects/7c/695adaa6e39b7b752394cd84085c2ffdf9a8dc": "dc5d2694581bb4b3dd1d97f2b8490347",
".git/objects/81/c96098ad2df21b041eedcae5511c5eef750b4e": "253254af051dfa2a530aa4aad32b38b6",
".git/objects/83/0e377514ee87c66cbc6bbc4b2f9c68d218242a": "54eb72f066d8741098ccabde3eed1c2f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4ebe9f5711461b622a74130fa83f8b57006ec0": "65e9a28c116e21acf27035e25bba1768",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/fc4a89ef33efe15b67a75cb512a892970d49be": "0f903c0482b8878eb74a48f194de2238",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/96/146aa7bc6e8f050cb635f0abc3e59223931a08": "365c2bb88e509814a223236b7c9f13ee",
".git/objects/a1/c6c6c7dcce5f255ad167098160a865ca152f11": "0d14fba17ea9853432a39332f9c63590",
".git/objects/a3/1a373455f47f619c72ded369295f44dd41aa82": "024bcee0ea9ba140675da6d13c963363",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b5/647cd3b9e8eb2faa6f2747dc16aefa7cf68e3a": "2b95c7816b6c83dbe2072405dd1851f4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/b34deac52a7f647913103165f05f8416d4f568": "d8c6c0a2488983cdd54d04cd0f66389e",
".git/objects/c8/326c6654fe2e9c07e7d61b27608061f26466a3": "eeb9eceb4ebc97274dec9b9176b816de",
".git/objects/cd/f46d3067fe930573329816a28d8dbcf6ca4c67": "a54b80970136e37ec547c3470281ed81",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/8267a3dd184e7c77adbe034dd68e9906559cbb": "e9f54bb7459fb6399c96cec49fceb26e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/be188ebf8fc169da0344fe70cb141109c2d8a2": "0ddc8df65c4793d8ad06e0fabdba6bf8",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/23e31e56a83f5fb0a5d393b682c9389b537d1a": "ea5ca99dad7d05fdf230d28da0ff0bb6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/f72f684a5a500cc1fc67c9b9221b483a5272f2": "09860f65a84dcd10ac707ec2b7b34b60",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/a0120fdfdc81973e1b3a96fcb0d03b0042e90b": "698262cea7b997cdb4f3aba5e4d59d18",
".git/objects/f1/dbca4d55f726fa0403e83a090e8edc735b8778": "4e7b8bb2f6acce512b015e26bb47ea69",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d665e7a40fd10749ab8782df4c5a1baae1dad1": "4b1df0bbf8d58ef0745865cb28fdbfc4",
".git/objects/f3/0183c8e58f8557d479ff1b3b3dc4afd701d66e": "8eb7d0b78d7189c4f15cb51122d86509",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/8ecb76a36b16f68fc6c1f028e3c14534f4d6cd": "7b674fd1c2e5446f2cef937a5dc1de31",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/8743362c170dd42dacd9261889ac98e24794e4": "083496ed196d6ce750c460b1f8999132",
".git/objects/fc/f94060106ed41f7e26bac3058efd54c574d426": "bb0918453a9740fbf17229bed97e2ee8",
".git/ORIG_HEAD": "8f6ae87a2525523273b13f88d2b256a3",
".git/refs/heads/main": "05157555ef3d2dafcc07a6a51ac40e1f",
".git/refs/remotes/origin/main": "05157555ef3d2dafcc07a6a51ac40e1f",
"assets/AssetManifest.bin": "f7e40a9af22e290de6695dcce3e8ccdd",
"assets/AssetManifest.bin.json": "f3ba51818e0337bd3df1df6423bc82ad",
"assets/AssetManifest.json": "08231702e4787fe1f62fb5eb79b1acca",
"assets/assets/fonts/BARNABEY.ttf": "9a089a9db6b7e7e7d76a77ef203aa09e",
"assets/assets/fonts/Peralta-Regular.ttf": "da40bb740f5dba46c289274313c8a93e",
"assets/assets/images/ak_47.png": "22f83c763144222bad49b66e7f72f8ed",
"assets/assets/images/background.jpg": "5e06ff55913d6a0969fc2fe52ec2b5ec",
"assets/assets/images/origiin_logo.png": "3327359fb69081fd1b5c95c8c51f3113",
"assets/assets/images/origin_logo.webp": "fa96f3e0af4c38b242fe080a18bf07f2",
"assets/assets/images/pho1.jpeg": "83ea8c6c8c179df20c05ef6e635a867f",
"assets/assets/images/pho2.jpg": "48d536a610554908256a553c5c74a77c",
"assets/assets/markdown/my_about.md": "ee6ed398c076696cbd2816a444fd2777",
"assets/assets/markdown/my_article.md": "13580d7979a43e995b7acdadc7e2b54b",
"assets/assets/markdown/my_contact.md": "8bdaf4e86d24778cb98de85d21cbe64e",
"assets/assets/markdown/my_home.md": "f631dee373db5b0461bff170278dbccb",
"assets/assets/markdown/my_news.md": "f73f3454894f224af29836beb2129811",
"assets/assets/markdown/my_products.md": "fd0e142c093b696a41b35c40778b2223",
"assets/assets/markdown/my_recruit.md": "e2a73ab847f9325147dc63d66810a8e2",
"assets/FontManifest.json": "886aa8ec4f400b13dd01e2d989b1bf36",
"assets/fonts/MaterialIcons-Regular.otf": "e86b9ea94a6976e81e7155a983879275",
"assets/NOTICES": "3d81e3d7acd6cea59358214f4ceb3982",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "3327359fb69081fd1b5c95c8c51f3113",
"favicon_default.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f75c8e6067bfa50aa0f435793072ce48",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4c39aedefbb8dd6de1108d4d158a39fc",
"/": "4c39aedefbb8dd6de1108d4d158a39fc",
"main.dart.js": "2c9fed4d88e77c4a9adc58719743ef4c",
"manifest.json": "0ad52345b3480325b7a19d7437fffa5d",
"version.json": "979157580f8867a89fafc0403e982391"};
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
