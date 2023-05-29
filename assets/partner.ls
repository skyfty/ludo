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
      "x": 73,
      "y": 434,
      "width": 600,
      "height": 275,
      "skin": "res://1742e0f8-3a8c-447d-adfd-f13ea4ee5404",
      "color": "#ffffff"
    },
    {
      "_$id": "9x1q9gtq",
      "_$type": "Button",
      "name": "return",
      "x": 336,
      "y": 827,
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
      "y": 731.0967191763397,
      "width": 733,
      "height": 50,
      "text": "WAITING FOR PLAYERS...",
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
      "x": 1,
      "y": 408,
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
              "_$id": "pwbl4dzw",
              "_$type": "Clip",
              "name": "0",
              "x": 153,
              "y": 74,
              "width": 143,
              "height": 143,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
            },
            {
              "_$id": "sh5s9z69",
              "_$type": "Clip",
              "name": "1",
              "x": 440,
              "y": 72,
              "width": 143,
              "height": 142.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
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
              "_$id": "bkjr52fs",
              "_$type": "Clip",
              "name": "0",
              "x": 153,
              "y": 80.25,
              "width": 133.5,
              "height": 133.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
            },
            {
              "_$id": "ddkd76e3",
              "_$type": "Clip",
              "name": "1",
              "x": 308,
              "y": 80.25,
              "width": 133.5,
              "height": 133.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
            },
            {
              "_$id": "0hioib88",
              "_$type": "Clip",
              "name": "2",
              "x": 463,
              "y": 80.25,
              "width": 133.5,
              "height": 133.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
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
              "_$id": "kd4nd07o",
              "_$type": "Clip",
              "name": "0",
              "x": 126.99999999999997,
              "y": 89.25,
              "width": 115.5,
              "height": 115.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
            },
            {
              "_$id": "mzgidu6j",
              "_$type": "Clip",
              "name": "1",
              "x": 499,
              "y": 89.25,
              "width": 115.5,
              "height": 115.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
            },
            {
              "_$id": "qxjah3hz",
              "_$type": "Clip",
              "name": "2",
              "x": 375,
              "y": 89.25,
              "width": 115.5,
              "height": 115.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
            },
            {
              "_$id": "cj0tvztg",
              "_$type": "Clip",
              "name": "3",
              "x": 251,
              "y": 89.25,
              "width": 115.5,
              "height": 115.5,
              "autoPlay": true,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 4,
              "interval": 200,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f",
              "_$comp": [
                {
                  "_$type": "4b5b8de8-d817-409d-aeeb-51e8cd7705a7",
                  "scriptPath": "../src/PlayerProfile.ts"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_$id": "plc3wgp5",
      "_$type": "Sprite",
      "name": "RoomTitle",
      "x": 323,
      "y": 267,
      "width": 100,
      "height": 100,
      "_$child": [
        {
          "_$id": "6jzcgk1x",
          "_$type": "Box",
          "name": "Box",
          "x": -191.99999999999997,
          "y": 77.00000000000006,
          "width": 466,
          "height": 83,
          "bgColor": "rgba(121, 79, 165, 1)"
        },
        {
          "_$id": "ze5fb650",
          "_$type": "Image",
          "name": "Image(1)",
          "x": -196,
          "y": 69.99999999999997,
          "width": 473,
          "height": 95,
          "skin": "res://8411c299-45f9-4865-aa35-709aca144e86",
          "color": "#ffffff"
        },
        {
          "_$id": "kyj2a6xi",
          "_$type": "Label",
          "name": "Label",
          "x": -167,
          "y": 100.99999999999997,
          "width": 120,
          "height": 28,
          "text": "Room:",
          "fontSize": 40,
          "color": "#FFFFFF",
          "leading": 0,
          "padding": "0,0,0,0"
        },
        {
          "_$id": "kddpfqq2",
          "_$type": "Label",
          "name": "RoomId",
          "x": -28,
          "y": 87.99999999999997,
          "width": 246,
          "height": 63,
          "text": "123123",
          "fontSize": 41,
          "color": "#FFFFFF",
          "bold": true,
          "valign": "middle",
          "leading": 0,
          "padding": "0,0,0,0"
        }
      ]
    }
  ]
}