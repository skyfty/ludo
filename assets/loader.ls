{
  "_$ver": 1,
  "_$id": "3r3qewty",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "autoDestroyAtClosed": true,
  "_$comp": [
    {
      "_$type": "6ba36595-2b25-4c8e-94ec-93bc12bea352",
      "scriptPath": "../src/Loader.ts",
      "progress": {
        "_$ref": "6uyufycy"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "nvsb6i8z",
      "_$type": "Sprite",
      "name": "Sprite",
      "x": -1.8653590928348905e-13,
      "width": 750,
      "height": 1334,
      "_gcmds": [
        {
          "_$type": "FillTextureCmd",
          "texture": {
            "_$uuid": "062a211d-d130-4021-9a56-215fbafda1f1",
            "_$type": "Texture"
          },
          "x": 0,
          "y": 0,
          "width": 1,
          "height": 1,
          "percent": true,
          "type": "repeat",
          "offset": {
            "_$type": "Point"
          },
          "color": 4294967295
        }
      ],
      "_$comp": [
        {
          "_$type": "9f78dd27-7aab-4a69-87aa-70472fc0ec06",
          "scriptPath": "../src/Background.ts"
        }
      ]
    },
    {
      "_$id": "07r27zlf",
      "_$type": "Image",
      "name": "Image(1)",
      "x": 259,
      "y": 241,
      "width": 264.5,
      "height": 264.5,
      "skin": "res://9a029446-e9cb-4e8e-9909-e389aff3b283",
      "color": "#ffffff"
    },
    {
      "_$id": "6uyufycy",
      "_$type": "ProgressBar",
      "name": "ProgressBar",
      "x": 72,
      "y": 896,
      "width": 605,
      "height": 34,
      "skin": "res://267ce008-8b89-4ac5-bc0a-c4c4a589b081",
      "sizeGrid": "9,10,7,11,0",
      "value": 0
    }
  ]
}