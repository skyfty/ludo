{
  "_$ver": 1,
  "_$id": "ruqmadqr",
  "_$runtime": "res://ddd78c04-cc08-49b6-8797-563c8b0aaefc",
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
      "height": 414,
      "skin": "res://1742e0f8-3a8c-447d-adfd-f13ea4ee5404",
      "color": "#ffffff"
    },
    {
      "_$id": "ggsnmda5",
      "_$type": "Image",
      "name": "Image(2)",
      "x": 111,
      "y": 582,
      "width": 527,
      "height": 160,
      "skin": "res://2aee250f-0d15-454d-a2f1-0c8c3d617f3f",
      "color": "#ffffff"
    },
    {
      "_$id": "9x1q9gtq",
      "_$type": "Button",
      "name": "return",
      "x": 343,
      "y": 904,
      "width": 60.539769571358306,
      "height": 60.88180216780663,
      "_mouseState": 2,
      "stateNum": 2,
      "skin": "res://5f04006f-a667-40e2-a42d-0feb9cbb4e4a",
      "label": "",
      "labelSize": 20,
      "_$comp": [
        {
          "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
          "scriptPath": "../src/ClickSound.ts"
        },
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "InviteFriendsBack"
        }
      ]
    },
    {
      "_$id": "r93vxv0u",
      "_$type": "Label",
      "name": "Label",
      "x": 8,
      "y": 850,
      "width": 733,
      "height": 53,
      "text": "Waiting for Friends to join...",
      "fontSize": 35,
      "color": "rgba(225, 224, 224, 1)",
      "bold": true,
      "align": "center",
      "valign": "middle",
      "leading": 0,
      "padding": "0,0,0,0",
      "_$comp": [
        {
          "_$type": "95d9c950-3df0-48f6-983a-191d7ee0bdd1",
          "scriptPath": "../src/TranslateLabel.ts"
        }
      ]
    },
    {
      "_$id": "02j2gvgx",
      "_$type": "ViewStack",
      "name": "ViewStack",
      "x": 3,
      "y": 515,
      "width": 744,
      "height": 219,
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
    },
    {
      "_$id": "plc3wgp5",
      "_$type": "Sprite",
      "name": "RoomTitle",
      "x": 128,
      "y": 495,
      "width": 493,
      "height": 81,
      "_$child": [
        {
          "_$id": "1of5aoo5",
          "_$type": "Image",
          "name": "Image(2)",
          "x": -21,
          "width": 531,
          "height": 81,
          "skin": "res://2aee250f-0d15-454d-a2f1-0c8c3d617f3f",
          "color": "#ffffff"
        },
        {
          "_$id": "kyj2a6xi",
          "_$type": "Label",
          "name": "Label",
          "x": 6,
          "y": 11.999999999999972,
          "width": 210,
          "height": 58,
          "text": "Room Code",
          "fontSize": 32,
          "color": "#FFFFFF",
          "bold": true,
          "align": "right",
          "valign": "middle",
          "leading": 0,
          "padding": "0,0,0,0"
        },
        {
          "_$id": "kddpfqq2",
          "_$type": "Label",
          "name": "RoomCode",
          "x": 232,
          "y": 11.999999999999972,
          "width": 256,
          "height": 58,
          "text": "123123",
          "fontSize": 48,
          "color": "rgba(0, 255, 55, 1)",
          "bold": true,
          "valign": "middle",
          "leading": 0,
          "padding": "0,0,0,0"
        }
      ]
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
          "y": 70,
          "width": 82,
          "height": 52,
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
      "_$id": "dxwfyv0n",
      "_$type": "Button",
      "name": "InviteFriends",
      "x": 133,
      "y": 748,
      "width": 496,
      "height": 81.71367077003089,
      "_mouseState": 2,
      "stateNum": 2,
      "skin": "res://1ff8c7bf-27cb-4fc7-bd42-0ebf0b4ba8a7",
      "sizeGrid": "31,13,30,11,0",
      "label": "INVITE FRIENDS",
      "labelFont": "Impact",
      "labelSize": 32,
      "labelColors": "#ffffff,#ffffff,#c9c6c6",
      "labelStroke": 2,
      "labelStrokeColor": "#32556b",
      "strokeColors": "#32556b,#32cc6b,#ff0000",
      "_$comp": [
        {
          "_$type": "47b6588a-c8ab-4554-aa14-703633941f2f",
          "scriptPath": "../src/TranslateButton.ts"
        },
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "InviteFriends"
        }
      ]
    }
  ]
}