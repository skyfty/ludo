{
  "_$ver": 1,
  "_$id": "ruqmadqr",
  "_$runtime": "res://ad36c844-687a-4547-a0c9-d64724488c9e",
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
      "_$id": "x98xphza",
      "_$type": "Image",
      "name": "Image(1)",
      "x": 249,
      "y": 62,
      "width": 252,
      "height": 252,
      "skin": "res://9a029446-e9cb-4e8e-9909-e389aff3b283",
      "color": "#ffffff"
    },
    {
      "_$id": "lid0fms4",
      "_$type": "Image",
      "name": "Image",
      "x": 75,
      "y": 434,
      "width": 600,
      "height": 358,
      "skin": "res://1742e0f8-3a8c-447d-adfd-f13ea4ee5404",
      "color": "#ffffff"
    },
    {
      "_$id": "ggsnmda5",
      "_$type": "Image",
      "name": "Image(2)",
      "x": 112,
      "y": 470,
      "width": 527,
      "height": 248,
      "skin": "res://2aee250f-0d15-454d-a2f1-0c8c3d617f3f",
      "color": "#ffffff"
    },
    {
      "_$id": "8n0qa1m1",
      "_$type": "Image",
      "name": "clockbk",
      "x": 225,
      "y": 331,
      "width": 300,
      "height": 169,
      "skin": "res://dae78020-f41b-49f5-9bb0-51d635bedf7a",
      "useSourceSize": true,
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "uwe30mz9",
          "_$type": "Label",
          "name": "clock",
          "x": 110,
          "y": 74,
          "width": 82,
          "height": 38,
          "text": "290",
          "fontSize": 47,
          "color": "rgba(68, 4, 4, 1)",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 0,
          "padding": "0,0,0,0"
        }
      ]
    },
    {
      "_$id": "9x1q9gtq",
      "_$type": "Button",
      "name": "return",
      "x": 344,
      "y": 871,
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
      "_$id": "r93vxv0u",
      "_$type": "Label",
      "name": "Label",
      "x": 8,
      "y": 807.0967191763397,
      "width": 733,
      "height": 50,
      "text": "SEARCHING FOR PLAYERS...",
      "fontSize": 35,
      "color": "rgba(225, 224, 224, 1)",
      "bold": true,
      "align": "center",
      "valign": "middle",
      "leading": 0,
      "padding": "0,0,0,0"
    },
    {
      "_$id": "02j2gvgx",
      "_$type": "ViewStack",
      "name": "ViewStack",
      "x": 4,
      "y": 445,
      "width": 744,
      "height": 304,
      "selectedIndex": 1,
      "_$child": [
        {
          "_$id": "g0x8hocg",
          "_$type": "Box",
          "name": "item0",
          "width": 743.5,
          "height": 333.5,
          "visible": false,
          "_$child": [
            {
              "_$id": "1xercp42",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "0",
              "active": true,
              "x": 153,
              "y": 74,
              "visible": true,
              "width": 143,
              "height": 143,
              "autoPlay": true,
              "interval": 200
            },
            {
              "_$id": "oofp7t3x",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "1",
              "active": true,
              "x": 440,
              "y": 72,
              "visible": true,
              "width": 143,
              "height": 143,
              "interval": 200,
              "autoPlay": true
            },
            {
              "_$id": "63gu73ql",
              "_$type": "Image",
              "name": "Image(2)",
              "x": 324,
              "y": 86,
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
          "height": 334.5,
          "_$child": [
            {
              "_$id": "0z4z1o9k",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "0",
              "active": true,
              "x": 152.9999999999999,
              "y": 80.00000000000006,
              "visible": true,
              "width": 134,
              "height": 134,
              "autoPlay": true,
              "interval": 200
            },
            {
              "_$id": "0iwy9hvg",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "1",
              "active": true,
              "x": 308,
              "y": 80,
              "visible": true,
              "width": 134,
              "height": 134,
              "autoPlay": true,
              "interval": 200
            },
            {
              "_$id": "nge0y1ok",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "2",
              "active": true,
              "x": 463,
              "y": 80,
              "visible": true,
              "width": 134,
              "height": 134,
              "autoPlay": true,
              "interval": 200
            }
          ]
        },
        {
          "_$id": "iai5kjij",
          "_$type": "Box",
          "name": "item2",
          "width": 743.5,
          "height": 334.5,
          "visible": false,
          "_$child": [
            {
              "_$id": "tgkmuq5u",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "0",
              "active": true,
              "x": 127,
              "y": 89,
              "visible": true,
              "width": 116,
              "height": 116,
              "autoPlay": true,
              "interval": 200
            },
            {
              "_$id": "57zu0fob",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "1",
              "active": true,
              "x": 499,
              "y": 89,
              "visible": true,
              "width": 116,
              "height": 116,
              "autoPlay": true,
              "interval": 200
            },
            {
              "_$id": "sjf1nkyn",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "2",
              "active": true,
              "x": 375,
              "y": 89,
              "visible": true,
              "width": 116,
              "height": 116,
              "autoPlay": true,
              "interval": 200
            },
            {
              "_$id": "sbga52ec",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "3",
              "active": true,
              "x": 251,
              "y": 89,
              "visible": true,
              "width": 116,
              "height": 116,
              "autoPlay": true,
              "interval": 200
            }
          ]
        }
      ]
    }
  ]
}