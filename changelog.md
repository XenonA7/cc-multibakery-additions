## 0.5.4 (06/06/2026)
### General
- Multibakery dependency version increased to 0.8.0
### Fixes
- Changed pvpBrake timings to the XPC standard (0.4s initial wait)
- Added the "forceRunOnMap": true setting to "lights" EventTrigger in mba-pvp to fix dance floor post-duel (Krypek PR)
- Fixed prop level in mba-lobby

## 0.5.3 (06/04/2026)
### Issues
- [0.5.3] PVP victory animation crash
  * https://github.com/XenonA7/cc-multibakery-additions/issues/7
### Changes
- Restored the pvp victory animation steps to mba-pvp (see issue)
- Deleted placeholder file mba-pvp - Copy.json

## 0.5.2 (06/04/2026)
### Changes
- Added Krypek to author list in ccmod.json
### Fixes
- Merged PR from krypek: https://github.com/XenonA7/cc-multibakery-additions/pull/6
  * Took CHANGE_VAR_BOOL steps out of FOR_EACH_PLAYER in mba-pvp
  * Added delay to pvpBrake DO_ACTION steps to fix aim animation not playing due to damage stun
  * Updated pvp logic FOR_EACH_PLAYER steps to only affect duel participants via "players": {"varName": "pvp.players"}

## 0.5.1 (06/04/2026)
### Fixes
- Minor tile improvements to room-2

## 0.5.0 (05/25/2026)
### New Content
- Added map co-op-dng/intro-rooms/room-2
- Patched in the LINE_SHADOW option for element-turret enemies in which they shoot proxies containing shadows
### Changes
- Renamed prd-blank32x32.png to mba-blank32x32.png
### Fixes
- Various tile fixes for room-1
- SHOW_CHOICE in dev room sign now uses 1 column
- Fixed map path typo in dev room TELEPORT step

## 0.4.1 (05/25/2026)
### Fixes
- Minor tile fixes to room-1

## 0.4.0 (05/25/2026)
### New Content
- Added map co-op-dng/intro-rooms/room-1
- Added WaterBlock support to the final-dng-inner map style using unknown-interior style spritesheet
- Added animation for water bubble tiles in final-dungeon-inner tileset via tile-infos.json patch
- Added water terrain property to water tiles in final-dungeon-inner tileset via terrain.json patch
### Changes
- TEMPORARY: Renamed mba-pvp.json to mba-pvp - Copy.json, created a new placeholder mba-pvp.json that does not have the victory animation
- Standardized " ' syntax in custom-map-styles.js

## 0.3.3 (05/23/2026)
### New Content
- PVP winners now do a short victory animation after winning
### Changes
- Teleporter to dungeon template map moved from mba-outdoors to mba-dev
- Teleporters between mba-lobby and mba-dev changed to wave visualType
### Fixes
- Updated SHOW_OBJECT_SLIDER_DIALOG steps in mba-pvp to use `declined` instead of `rejected`

## 0.3.2 (05/22/2026)
### Issues
- [0.3.2] Dev room unlock broken while server is running
  * https://github.com/XenonA7/cc-multibakery-additions/issues/3
- [0.3.2] SHOW_ANIMATION inconsistency in pvpBrake
  * https://github.com/XenonA7/cc-multibakery-additions/issues/4
- [0.3.2] Host player double BGM tracks after pvp
  * https://github.com/XenonA7/cc-multibakery-additions/issues/5
### General
- Merged mba-pvp and mba-south edits from Krypek: https://github.com/XenonA7/cc-multibakery-additions/pull/2
- Multibakery dependency version increased to 0.7.9
### New Content
- Added new dev room unlocked by renaming the building to "mbaDev" (currently empty)
### Changes
- mba-pvp:
  * Moved tmp.xpcDisableHoming out of mapInitOnce and into the pvpStart and pvpEnd events, with FOR_EACH_PLAYER
  * Players now show the "aim" animation during pvpBrake
  * Added teleport show/hide effects to players when positions are reset between rounds
  * Players now properly face towards the center of the arena between rounds
  * Deleted the action teleporting players back to the center in pvpEnd
  * Added an in-game SHOW_OBJECT_SLIDER_DIALOG to set tmp.pvpDamageFactor in the arena config sign
  * Event mapInitOnce renamed to mapInit and changed to ONCE_PER_ENTRY instead of ONCE
  * Added default tmp.pvpDamageFactor setting in mapInit as 0.2

## 0.3.1 (03/22/2026)
### Issues
- [0.3.1] Assertion error on pvp start
  * https://github.com/XenonA7/cc-multibakery-additions/issues/1
### General
- Multibakery dependency version increased to 0.7.5
### New Content
- Added prestart.js
- Added recolored tileset \assets\media\map\co-op-dungeon-outer.png
- Added the co-op-outer map style
- Added map co-op-dng/template
- Added TeleportField to template from mba-outdoors
- Defined new 48x48 DynamicPlatform stylekey dynPlatformLarge
### Changes
- Changed mba-outdoors to use co-op-dungeon-outer.png instead of final-dungeon-outer
- Added AR_MSG when pvp cannot start due to insufficient parties
  * Doesn't run FOR_EACH_PLAYER due to assertion error
- All AR_MSG steps in mba-pvp map now execute via FOR_EACH_PLAYER
- Set cameraInBounds to false for map mba-south
- Added missing concrete floor details in mba-south
- Darkened co-op dungeon entrance ground tiles
### Fixes
- Changed variable condition pvp.active to pvp.multiActive in mba-pvp
- Fixed changelog dates
- Changed "fishing" NPC reactType to FIXED_FACE in mba-outdoors

## 0.3.0 (03/07/2026)
### General
* Multibakery dependency version increased to 0.7.5
### New Content
* Added map multibakery/mba-outdoors
* Added map multibakery/mba-south
* Added "fishing" game test
* Added replacement vanilla map autumn/path-7-1 that contains a west exit
* Added a custom sign prop at \assets\data\props\multibakery.json
* Added option to rename the MBA building using the sign to the left of the pvp room door in mba-lobby
### Changes
* Updated mba-lobby to use new 0.7.5 variables
* Set "tmp.xpcDisableHoming" to true in event mapInitOnce on pvp map
* Replaced s_startMultiPvp with a OneTimeSwitch that is closer to the dance floor and disappears during pvp duels in pvp map
* Deleted prop palettes from mba-lobby and mba-testing
* Added hitInvincible to all attacks in meat-saw enemy
* Updated fall-detector event in mba-testing to use FOR_EACH_PLAYER
* Updated playBattleMusic event in mba-pvp to use FOR_EACH_PLAYER

## 0.2.2 (01/24/2026)
* Added map multibakery/mba-testing.json
* Added super-meat mechanics, assets, files from Project Red to MBA testing room
* Added a prop to spawn bosses in MBA testing room
* Added XPC character select sign (including Buggy) to mba-lobby with Alybox conditional patching
* Fixed a typo in pvp map howToPlay text

## 0.2.1 (01/21/2026)
* Enabled outer barriers in pvp map when map.barrierConfig == 2 (due to switch)
* Changed pvpBrake and pvpEnd from PARALLEL to CUTSCENE in pvp map

## 0.2.0 (01/21/2026)
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
