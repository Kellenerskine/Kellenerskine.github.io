'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4acef1e8072a070dbb18fa6e6b2764ea",
".git/config": "5ae30cd146f82b709b2f8a9992a53c34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "29453f05e67a10732ebe4b394edb37e5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4985e6d32089dca9044ba6cb63ea94e7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "447099db58a63708800aa794b30d0132",
".git/logs/refs/heads/main": "dffdc090d855df42ebafffab341b7ef4",
".git/logs/refs/remotes/origin/main": "7397e293114a0cf4bee74aad3af43db4",
".git/objects/00/11d6de22dd6cde82b6e501eac2eb8b823e62d1": "ca85c0dfa190750aca5ed5433ab1b284",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/e8bfcdab4dec51cf2b7c88385736d5819e7e30": "d9a523e4d15550ddf6c15d17f2b30b5d",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0f/7a472a7e8eb95090375858ec5cd473eb80dd8f": "3b45e5fe9102b69abe834ecaa5efcb7a",
".git/objects/12/86eec897e8280e69b0d3ca5fb83f5d2166decf": "ee072715f7215a48958cf47ac800135c",
".git/objects/12/c005545fc0f60e75363cbe88c971544a5f1419": "bb0c6478d37e767499d33457f775fa9b",
".git/objects/13/ae8e147504be1a67f836be27c53a325707a7f0": "61fddac4632f46015925b65c05d3f9aa",
".git/objects/14/0c64dc33a4ce0aae9b6a1eff2190b466bf918a": "083278a7b1ea6f3502118aa9ef0ff50b",
".git/objects/18/8e758b7eb1a038ea6b8d4ab79ae19958664ab2": "b99ff12016c0e21564ad03dacc57c8e9",
".git/objects/18/a0b0ccc0283e267ea9487a25581f6088d70aae": "a786f1277d751ec7411d99a8ef8656a4",
".git/objects/1c/bd8e17cbcd32f38530a33155391aa2686729cc": "9c9254c45ea6fcad246aa6c39b29df3e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/29/acb83695401bb9cb11597be91f0628c0390447": "a87dde5e36bc418992a94b996df6c791",
".git/objects/2b/48da5ef8f1fd329632a9f345348066b83921ad": "bc2fecbadef5dc81bcbc24dc5e78f16d",
".git/objects/2b/a82c8dd0f314f68c3d4ca587b358d11763be05": "40104ed04c68e2197fdee504bfe34864",
".git/objects/2b/e54755a5c59cc14ae038f5d0a6b7c365381fad": "fbcc26e63a349de87334f0ec82b1d8c9",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/b2423862d6702bb6d9e9e43d9d27d095970aa7": "85c9641c1173dead1e7a41161f24ca5d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/852692a426489324d71ba6793b4cdb309bec94": "87b4cfaf245cb0bd234d3d29976344b8",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/606c00e1578c6a85c60eaa548802792858a699": "b4ec618e14b988edddf88e0d894a3d0b",
".git/objects/4b/8f5cb409a145454016cc89ca9b9d761e2a6533": "fda691c9422e8a593e6d35fca224f541",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4e/a068ba44374787cabc76f0a20fc74f3104ede8": "988736cb403a283c9fa35615d380484c",
".git/objects/4f/a2d8f85c476622c07c014476d47e4f49b30d3f": "9acf4855c89387abf76daef00633d7fc",
".git/objects/51/6938ad03e5239977e7f0c415a8d03c562f71fd": "73be251b5d5bd3937def835db05fe910",
".git/objects/59/1bbb90287a5962a08f1856cb89b814a22a7389": "51d9fc9d68e434df8c24241f0bc401c2",
".git/objects/5b/6091608ea241041e41a092d81fc035ed768800": "f19a8c0d85377dc46e24092ab144cb9a",
".git/objects/5e/609782a6376db2a2d4015316fa9f6a621ffef6": "e9f844a86c0f51510f7f86a3f18e9921",
".git/objects/63/9d10328886ec9d1a43b9f36508554c0c7eae2a": "fca3ef814fe94032c35643a702eb7437",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/71/f8c1449ab8654db00e5b9d8d90a92b55ab805d": "3aced7b0cfcbb856f139e7083c90584a",
".git/objects/72/d250e40fdfd4963887010801cef481d76f918f": "24d51cac57b898dfed3a06b315c388ea",
".git/objects/7f/5bbf312fcab96b25de07fcfc5e8d2b7f0d8954": "ef1421e50697fcb1122f39aa8b146b5b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e4b0888c2692cad3796ca7fa08217b71ea076f": "cc1e2714abd53b88f3d505549e07e98b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/26e81047e8fb0ba46c6c2d69865ec3207ce53a": "9f705195e9112306cb8608ef7d85255b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/10063f52a9a5074d77f994afb4004573db5a27": "eaad02e81088bbfa29067fd60b504c49",
".git/objects/91/42d383395cd2300795d306c8c3f417cfb0aeca": "2726e741f3caed10ef944eb6b9d0ec04",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/017fb69f6de533eef9be8004ec80cab7b3687f": "524f50d1597754770492bde3e9c51e66",
".git/objects/9c/25bdfb38f1c79606a4f457d837484e35b2a877": "ca31dac6f3c91fbc20b3530add980a19",
".git/objects/a1/f5c4e391e70600f83d5f3a478f19c5e81b40da": "f7949121077498eb33392040f55da236",
".git/objects/aa/90eea128f0b2771d24429e331be946dbe4eb29": "f9aba5e6f8608657eb7c98cdda09697c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/1ef7c982bb6cef6c06175c87129cce8e46c1d9": "5383a4c22851bf7f9752091ef3f7820b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/edda13633ba07ff22ed9a341b8d012fa38a4c7": "906e6f30c0e8761c1b87339a489a363e",
".git/objects/bc/726137f16cc3435637dc0683fd8ddbbd35bf41": "d68f59c3936fed6b99b9d23317e25397",
".git/objects/c3/cd2c5cbaaff1a67710e406a03b8be8719e0472": "07912fec642918005643a718ada667f1",
".git/objects/c4/61822da6a20e94c5a7794c8277681bdf3867f5": "ebcb2854cbef48d3de581e215171edaf",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/cb/c5dbc4bac9a5ca38eded0eba6b1a3d68eb7d15": "6f4c285afeb11f351466ae676c27d2d4",
".git/objects/cb/cfece077313f659db6114115a48c0f0d290d45": "04bddeffaf3e9c724786ce5ebfb85ab0",
".git/objects/cf/5005c89ac9eb1523fad116cce3356341efcf01": "cbc94cebfed90d2bdad20aef29bd7411",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c852d2d135176ed00ddeefb6cbd2ae396a05e6": "a5440e84d5bb8ad6077d3d67b468bd94",
".git/objects/da/1776589124d9ae3839f4151c34928e3de712a1": "db359bf58e2875da43f43e05d11dffaf",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/19da9ea9a268a768537806318b82c05d1d2b6c": "049506e29f9e974d5119fe9b9b51460d",
".git/objects/dc/4093b20289a3abcef64b9871816c82afa4545d": "50fac9bb32a827d45b64c8833bf032ba",
".git/objects/de/a704b658b3bcd9a8ebfea7e1d8ee1431c51df7": "c371de3d281e83dcb9cc2d200f897745",
".git/objects/de/f2bac11a44a034b3a7a776214faa1f627df539": "c4ffd60e1dc93b875a89470d36aa2f59",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e3/d19fb5125e7267cc96fc389981545c63c61438": "7139e0bb7ea6c5962bf5104650df9f8e",
".git/objects/e4/528073c64876b372ef238046f5135667ce6d95": "8c42ec42b38db1ad806354a3b0955943",
".git/objects/e8/06244c7a098f50b3dcf40d6cc49a70a4a617cf": "e1168d53add60e0f2ab5c105d054e240",
".git/objects/e9/2e0d3704e35f7b248ca680ec7fdd96eb212211": "4b6ad9edf08aa12bea2291e709beceee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/29b913d0fff5ba94658067b8eac303b8d905f5": "17c49f23439ba120d006dd6dff4d13e5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/ee9e06fff7a582ae8d8af453c37061514bab5e": "697d10ec5aff4b459947e6a97b84851f",
".git/ORIG_HEAD": "4e541d87118e1de4ca409d386ac31283",
".git/refs/heads/main": "4e541d87118e1de4ca409d386ac31283",
".git/refs/remotes/origin/main": "4e541d87118e1de4ca409d386ac31283",
"assets/AssetManifest.bin": "621382d181a079808e0279509e4b7be7",
"assets/AssetManifest.bin.json": "f957acfe94bac6e3a263740014992f4c",
"assets/AssetManifest.json": "a52516034e36e667a01ac055686d2586",
"assets/assets/hmdb.csv": "fa667f405e4d1030d2fba5dcdb9d33c3",
"assets/assets/mycsv.csv": "7cb11ab1125a7558199b8874fb9594cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9fc2b19be7d4c83fd25f9f8d679d75b4",
"assets/NOTICES": "5db02a7524ba7c958873a1f37171fc80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "1d48021f2a0455466f86649b4e828a69",
"assets/packages/flutter_osm_web/src/asset/map.js": "9ca74acd5f94ced7366fa719168d7b51",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/interactive_maps_marker/assets/marker.png": "a8810cb8fd2ebf0fbfa31a6cb803267f",
"assets/packages/interactive_maps_marker/assets/marker_selected.png": "63b742c95ad1f07d0844c70a832305b1",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "21cb151fafc3d785c4d2b85ced2af91e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1843dab44e2c81f3e6c91301c76b6d8e",
"/": "1843dab44e2c81f3e6c91301c76b6d8e",
"main.dart.js": "acbf6c06e9d8e421029ec1eb0db110eb",
"manifest.json": "1b6e6e30f65c9153aa16618d7ae251e5",
"version.json": "b3cfc5dfb625a5f41d99c2052009ce04"};
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
