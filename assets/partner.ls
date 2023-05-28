{
  "_$ver": 1,
  "_$id": "ruqmadqr",
  "_$runtime": "res://9f1fc9b7-ce57-4d73-9d43-44bf875415bb",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "view",
  "autoDestroyAtClosed": true,
  "_$child": [
    {
      "_$id": "ejftqvw3",
      "_$type": "Sprite",
      "name": "Sprite",
      "width": 752,
      "height": 1337,
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
      "_$id": "lid0fms4",
      "_$type": "Image",
      "name": "Image",
      "x": 75,
      "y": 176,
      "width": 600,
      "height": 372,
      "skin": "res://eef9230a-487d-4c7d-94e1-d533b2a6a022",
      "color": "#ffffff"
    },
    {
      "_$id": "9x1q9gtq",
      "_$type": "Button",
      "name": "return",
      "x": 344,
      "y": 567,
      "width": 60.539769571358306,
      "height": 60.88180216780663,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://5f04006f-a667-40e2-a42d-0feb9cbb4e4a",
      "label": "",
      "labelSize": 20,
      "_$comp": [
        {
          "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
          "scriptPath": "../src/ClickSound.ts"
        }
      ]
    },
    {
      "_$id": "02j2gvgx",
      "_$type": "ViewStack",
      "name": "ViewStack",
      "x": 6,
      "y": 7,
      "width": 744,
      "height": 548,
      "selectedIndex": 1,
      "_$child": [
        {
          "_$id": "g0x8hocg",
          "_$type": "Box",
          "name": "item0",
          "width": 743.5,
          "height": 743.5,
          "visible": false,
          "_$child": [
            {
              "_$id": "pwbl4dzw",
              "_$type": "Clip",
              "name": "Clip(1)",
              "x": 158,
              "y": 225,
              "width": 143,
              "height": 143,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 0,
              "interval": 50,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f"
            },
            {
              "_$id": "sh5s9z69",
              "_$type": "Clip",
              "name": "Clip",
              "x": 445,
              "y": 223,
              "width": 143,
              "height": 142.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 1,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f"
            },
            {
              "_$id": "63gu73ql",
              "_$type": "Image",
              "name": "Image(2)",
              "x": 329,
              "y": 237,
              "width": 86,
              "height": 113,
              "skin": "res://d7b94ac8-3b1d-450e-ac68-59c1d9f39e73",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "sem5y8rm",
          "_$type": "Box",
          "name": "item1",
          "width": 743.5,
          "height": 743.5,
          "_$child": [
            {
              "_$id": "l5hlxty5",
              "_$type": "Clip",
              "name": "Clip(1)",
              "x": 136,
              "y": 249,
              "width": 95.5,
              "height": 95.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 1,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f"
            },
            {
              "_$id": "79kwllvk",
              "_$type": "Clip",
              "name": "Clip(2)",
              "x": 259,
              "y": 249,
              "width": 95.5,
              "height": 95.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 1,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f"
            },
            {
              "_$id": "r6h7ubsa",
              "_$type": "Clip",
              "name": "Clip(3)",
              "x": 382,
              "y": 249,
              "width": 95.5,
              "height": 95.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 1,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f"
            },
            {
              "_$id": "wcjfszel",
              "_$type": "Clip",
              "name": "Clip(4)",
              "x": 505,
              "y": 249,
              "width": 95.5,
              "height": 95.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 1,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f"
            }
          ]
        }
      ]
    }
  ]
}