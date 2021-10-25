'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3daa223e44daa89a1858e16114a8f6d3",
"index.html": "a72f5f449e927d50ab5eda400109c656",
"/": "a72f5f449e927d50ab5eda400109c656",
"main.dart.js": "10f5f3f9d9db2b2debfc5a764cffc277",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9d3d57f21e96b6052aaf48bd974ffe62",
".git/config": "893d1bc02b2afe0fa6f6f5dd1678af34",
".git/objects/61/f247c3611f7e641e0cbdc490be27221af32c8d": "c2808989c81f4e80b41b83bb05d967c4",
".git/objects/95/4b66a7d522d2862fdebd74b0aacb9ce2b1c19b": "c04b22e2fca55b27cff8008d4c453b35",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/6f/701c196230ec7889c3eba5653501bc4d74eb7c": "cf9f5815cca7181524758cd23a5476e5",
".git/objects/04/8d84f085ae4157c3d0645e84278161d50d1c95": "f1289f1ea5ee0266c0b6ad20a922430e",
".git/objects/04/f6b479020e1f6815eacbcb91b6b7212a324125": "70ef557b8b193be844f75136208ecf5f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/58/2d0dce8e53b9f62ae35ec7729c6b5c5a29a58f": "c68123c6954e9be1be277823b0724151",
".git/objects/58/1e25aa29e4437465ac5351254c9af928ddc051": "942e3fedbe61841379e35db69530dbc5",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/c9b9e4b6637e9f9195eb5c5f848a00226075d6": "4af066d1b7e5fe762c1a6dd86bf86bfc",
".git/objects/93/59a36bad4649ba6f7befc8634cbae0962b4ebe": "3e66d602691936fe582d9afec4a8a94d",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/d7/5c97de1cc5668203ef82c83135ea61eee4d211": "130eceaad51e68ef04260239b9daf250",
".git/objects/da/58658cf55c3b82c33b248cf06f0bd4257f025a": "89e3e432b219950e5568717bcf50c20e",
".git/objects/d6/8f579d2c9de34149b865f0b40a0b882a82c77e": "c6150f0a14a67915dca7cff76430b2e2",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/eb/dd52b7e305750f8def436f0a65dbcfeea18d55": "d884483b1169182a3d528bccc6967d1b",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/c9/bb82a38fe6c8bf29fccdab18a83f6e1653cd1a": "f40918c2e7f652789f9637da5989d00f",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/42/30ace1a52c4fbd7eaf774adbdc711a83d79101": "655c0dccc9845d6a0e23cf868ca393c6",
".git/objects/45/226ab8b48584bd6e41af8ea97580114b57031d": "5524e408aef301e98b27166dc409bc2d",
".git/objects/73/2347bbae018e029df4a6e4e0a657fa5b37bd11": "beec338adc975d3de678715536243e61",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/97ff5d163dadbd2a1b57b0834de0b305b458ae": "ccdc7b9677cd572b264d71e37bb7dd1c",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/91/16dfa6c46fd547b3de0c489883c0806a79ca09": "593ff31af84c62b1ece00c0c26763b17",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/7e3b27f28a3f61e834b9f12f7455b93bbe443e": "d01a303a0db43499a782de1114bbdf0d",
".git/objects/6d/fd5584fec9ceb57a968c62477839b8eb9ddd90": "a5dd041f6c6f11f947ec23b6914e41d9",
".git/objects/01/8d8491f2c8f0a29eb7c4415abf4625ac110d52": "559b997b155e4a1a42200f2a72079ee5",
".git/objects/01/10d805791491a6c315735ca599ddb9fce4c514": "8949a8d084d22ea377ac3412a00fb9b6",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/c7af4fa66e56e63b930c538b668797f2451314": "98725754efc7004cf430fe30fd95dab8",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/bf/5e72c6f1ac7db27dc2bc310602a50cd7d8a87e": "76b6dbe5eab50652c9157679fb586b76",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/436ca5ef6a97a886e95a01aad229c357e3b06b": "19148d163030737019edaf90106703fe",
".git/objects/a0/51124c39345f53ce985a471e7aaea35da34207": "acb6c1c5742d52c3228adc9a24048eb9",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/d2/6cde65b19364e0085e6987666db3cff8a68035": "5ac4eed837c07fa61aaf5d5c6e2a855a",
".git/objects/af/08a346ae59fd7a975737d5fc8340878f9e4fc2": "8480c8bb6360d9dac91662be0d1a5d6e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/c782ba549f32c710ad7a802dd6dc74bde9a5dc": "098fe0db63bb0fdd76f9485a21c8472d",
".git/objects/f9/b1c06cb73a3aad563ba60c79b05f06554cbbd9": "57a9d3a2ebf19e1639f07d4c24418620",
".git/objects/e8/9aafa8fde4c6267558c06b5f6112db9ddda29c": "e481bd41787244595930c21210269e6f",
".git/objects/e0/33d8a870d1cf921fc71c18e5918f7967566839": "b19af1bc40b06996f0491f7efaa5b6fa",
".git/objects/83/2d383c8109d4c35437909c2d9d5d331a318035": "71ee5e5c689e7f071fddd9dc07ecb3cb",
".git/objects/1b/97bbc1320081855b1f4c2e74c5915ae8238ffb": "77c2c5280f948e42f193c0e756db1b27",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/7b41adeec95a70f209d3373e97e244d8187f1d": "6c584327be0c27695ab48ad8aaea0542",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/78/986865d812f50fa64d43aa7602dea3d655fd72": "63b2b7878a2bdc20e3a63c19e7af5f9f",
".git/objects/14/34ff66fbd46619170b7bbc34a26831c1e6df47": "395b8d7214fc90d72a35c9757d5b9d26",
".git/objects/14/6b37590945f05def328136756884bd54ac18a1": "eebb0fbe9d777a571ec701bc5799ad8d",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "26a24b1aa2bbd03306cd9f17d9a1ac60",
".git/logs/refs/heads/main": "26a24b1aa2bbd03306cd9f17d9a1ac60",
".git/logs/refs/remotes/origin/main": "241a411168fea7acb9a1ceba5161112b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "29d5d1006207703ac6c5e53fe9213b78",
".git/refs/remotes/origin/main": "29d5d1006207703ac6c5e53fe9213b78",
".git/index": "326c367c53ba1c9ff0a94952edef83fc",
".git/COMMIT_EDITMSG": "b48ff52ab28dddd1a37b0f68e6abb816",
"assets/AssetManifest.json": "c1c31f5a4fea2db37cbc465dde81a8d9",
"assets/NOTICES": "5b84cf809904fe62737f3d3523bb38e7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/domain.png": "f02220a7837f638cc46b6ee6b0baba0c",
"assets/assets/images/add.png": "e65d6c1ac7961157c35586c8f20e29b6",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/machine.png": "06db738387cec27faa90683cd83ec06f",
"assets/assets/images/java.svg": "64f6e32092e90b8a7fb090d3d003ccb1",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/mail.png": "4dfc12f1a2f747066e4edbbfe97cb9e7",
"assets/assets/images/register.png": "17b6dd1a8bef82c523a1d9a32e77d4ea",
"assets/assets/images/database.png": "ea0fde4a6b44606f02f319f92f636158",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/user.png": "7a0b0259be0ea65cba8feaab3e3c93c8",
"assets/assets/images/intelligent.png": "c99b7db16f665f91a8e58aaef84b8c54",
"assets/assets/images/background.jpg": "ea23e434958a1eff8aa3d2a61058e545",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/add4.png": "9d4ed9fa01eec0acb569ad24bc47a49a",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/password.png": "d32df3565904ff1a8a9aae5672256620",
"assets/assets/images/portfolio_pic.jpeg": "13f19c8b243cfba4df8671b34b09627f",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/laptop.png": "02cc427e7be388ffed394aacfe264349",
"assets/assets/images/add1.png": "be623ea3e1f9caecf57baba5850a8a32",
"assets/assets/images/call.png": "9bc4135ab33545fc1a76a3347c9d4cd8",
"assets/assets/images/signout.png": "ef2aedb0ed3a7997f7a683d94f558afc",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/pri_sign.png": "e32cca12c5d56a5c98cd5cd5c098d26b",
"assets/assets/images/signin.png": "ad2b1f685d0e08b787d6122f6b660f4d",
"assets/assets/images/ai.png": "621b2a580a8504b1e3e42dde3608f865",
"assets/assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
