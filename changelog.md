## 0.2.2 (01/24/2025)
* Added map multibakery/mba-testing.json
* Added super-meat mechanics, assets, files from Project Red to MBA testing room
* Added a prop to spawn bosses in MBA testing room
* Added XPC character select sign (including Buggy) to mba-lobby with Alybox conditional patching
* Fixed a typo in pvp map howToPlay text

## 0.2.1 (01/21/2025)
* Enabled outer barriers in pvp map when map.barrierConfig == 2 (due to switch)
* Changed pvpBrake and pvpEnd from PARALLEL to CUTSCENE in pvp map

## 0.2.0 (01/21/2025)
* Created github repo: https://github.com/XenonA7/cc-multibakery-additions
* Support for cc-multibakery 0.7.3
* Stored old versions of map files in \assets\data\maps\multibakery\old-versions
* Created map multibakery.mba-lobby
* PVP map is now known as multibakery.mba-pvp
* Disabled for now: \maps\rookie-harbor\starcaller2-lobby.json.patch
* Disabled for now: other mod content patches such as XPC character change signs

## 0.1.3 (11/27/2025)
* PVP test map:
  * Added missing RESUME_DEFAULT_BGM steps to pvpEnd
  * Added SHOW_AR_MSG step to BGM sign
  * Added multi.active required condition for pvpStart to run
  * Fixed broken TeleportField graphic for starcaller2 lobby
* Started adding unimplemented team banner scale-props (json file does not exist yet)

## 0.1.2 (11/17/2025)
* PVP test map:
  * Merged "not nice" all-in-1 cheat sign into new option for main sign
  * Re-worded random number text
  * Added XPC-style BGM selection sign for duels containing vanilla BGM options
  * Set map BGM to rookieHarbor
  * Added a SHOW_AR_MSG warning if you hit the s_startMultiPvp switch without at least 2 valid teams
  * Moved groundProjector tiles from GroundDetails to Object1 layer
  * Added new debug sign for circuit resets and SP refills

## 0.1.1 (11/01/2025)
* PVP test map:
  * Fixed collision layer (1)
  * Added a navmap
  * Added dummy labels to the "obtain gear" event steps
  * Added sign/teleporter for Starcaller support (via conditional patch)
  * Added sign for LPC support (via conditional patch)
  * Added random number test
  * Minor adjustments to groundDetails floor lines
* Patched in teleporter to multibakery.pvp-test from Starcaller2 lobby (via conditional patch)

## 0.1.0 (11/01/2025)
* Patched in teleporter to multibakery.dev from rookie-harbor.center
* Created map multibakery.pvp-test
* Patched in teleporter to multibakery.pvp-test from multibakery.dev
* Added dependency on alybox for logic steps
