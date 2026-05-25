ig.module('mba.patches.map-styles')
    .requires('impact.feature.map-content.map-style')
    .defines(() => {

      //Adds WaterBlock support to the final-dng-inner style using the unknown-interior style spritesheet

      ig.MapStyle.registerStyle("final-dng-inner", "waterblock", {
        sheet: "media/map/arid-interior.png",
        x: 0,
        y: 784,
        puddleX: 144,
        puddleY: 720
    });

      //Adds the co-op-outer custom map style
      
      ig.MapStyle.registerStyle("co-op-outer", "map", {
      sheet: "media/entity/style/co-op-map.png",
      hasDoorMat: true,
      doorSound: "STONE",
      teleportField: {
        x: 0,
        y: 160,
        xCount: 3,
        zHeight: 0
      },
        doorGlow: {
        x: 144,
        y: 0,
        xCount: 1,
        sideX: 160,
        sideY: 96
      }
    });
      ig.MapStyle.registerStyle("co-op-outer", "puzzle", {
      sheet: "media/entity/style/co-op-puzzle.png"
    });
    ig.MapStyle.registerStyle("co-op-outer", "puzzle2", {
      sheet: "media/entity/style/co-op-puzzle-2.png"
    });
    ig.MapStyle.registerStyle("co-op-outer", "destruct", {
      sheet: "media/entity/style/co-op-destruct.png"
    });

    // Not entirely sure what this does, but it is required or else a "bombBlock" Destructible entity will crash on load.
    // My theory is that it is responsible for the red shimmer animation that plays on the rock.
    // But other Destructible types like "boxMedium" have the shimmer effect and don"t require the code below. So IDK.
    ig.MapStyle.registerStyle("co-op-outer", "effect", {
        sheet: "area.cold-dng",
    });
    ig.MapStyle.registerStyle("co-op-outer", "pipes", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 176,
        y: 368,
    });
    ig.MapStyle.registerStyle("co-op-outer", "pipeSwitch", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 48,
        y: 0,
    });
    ig.MapStyle.registerStyle("co-op-outer", "propeller", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 0,
        y: 48,
    });
    ig.MapStyle.registerStyle("co-op-outer", "magnet", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 0,
        y: 80,
    });
    ig.MapStyle.registerStyle("co-op-outer", "tesla", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 0,
        y: 112,
    });
    ig.MapStyle.registerStyle("co-op-outer", "teslaSwitch", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 48,
        y: 112,
    });
    ig.MapStyle.registerStyle("co-op-outer", "anticompressor", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 0,
        y: 160,
    });
    ig.MapStyle.registerStyle("co-op-outer", "dynPlatformSmall", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 144,
        y: 48,
    });
    ig.MapStyle.registerStyle("co-op-outer", "dynPlatformLarge", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 128,
        y: 80,
    });
    ig.MapStyle.registerStyle("co-op-outer", "rotateBlocker", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 48,
        y: 144,
    });
    ig.MapStyle.registerStyle("co-op-outer", "waveSwitch", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 48,
        y: 208,
    });
    ig.MapStyle.registerStyle("co-op-outer", "waveblock", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 144,
        y: 128,
    });
    ig.MapStyle.registerStyle("co-op-outer", "waterblock", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 0,
        y: 256,
        puddleX: 0,
        puddleY: 224,
    });
    ig.MapStyle.registerStyle("co-op-outer", "bouncer", {
        sheet: "media/entity/style/co-op-misc.png",
        x: 128,
        y: 256,
    });
    ig.MapStyle.registerStyle("co-op-outer", "lorry", {
        sheet: "media/entity/style/co-op-misc.png",
        railX: 128,
        railY: 352,
        lorryX: 192,
        lorryY: 256,
    });
});