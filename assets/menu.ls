{
  "_$ver": 1,
  "_$id": "etbxwadg",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Menu",
  "autoDestroyAtClosed": true,
  "_$comp": [
    {
      "_$type": "7bad1742-6eed-4d8d-81c0-501dc5bf03d6",
      "scriptPath": "../src/Lunch.ts"
    },
    {
      "_$type": "02f796be-4a4d-47b6-85e5-393116d386f4",
      "scriptPath": "../src/Menu.ts",
      "challengeComputer": {
        "_$ref": "pklrsvsb"
      },
      "challengeExtreme": {
        "_$ref": "mqsu2s73"
      },
      "challengeFriend": {
        "_$ref": "5wbt1gd9"
      },
      "settings": {
        "_$ref": "foe94s5k"
      },
      "avatar": {
        "_$ref": "upjap8ug"
      },
      "goldcoin": {
        "_$ref": "pizo50xh"
      }
    },
    {
      "_$type": "7e713f81-07d8-440c-a6dd-6f4538227cee",
      "scriptPath": "../src/Station.ts",
      "playerName": "Feitianyu",
      "host": "127.0.0.1",
      "port": 8080,
      "zone": "Ludo",
      "debug": false
    }
  ],
  "_$child": [
    {
      "_$id": "xjmkpbl5",
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
      "_$id": "pklrsvsb",
      "_$type": "Button",
      "name": "vscomputer",
      "x": 161.3118764845606,
      "y": 368.73516342582855,
      "width": 427.57945754497143,
      "height": 115.4464535371423,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://81906343-13e7-46b0-99ac-72f789289ed4",
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
      "_$id": "mqsu2s73",
      "_$type": "Button",
      "name": "online",
      "x": 161.3118764845606,
      "y": 524,
      "width": 427.57945754497143,
      "height": 115.4464535371423,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://0e58c1b4-0806-4eee-adb5-1723c7de554b",
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
      "_$id": "5wbt1gd9",
      "_$type": "Button",
      "name": "friends",
      "x": 161.3118764845606,
      "y": 679,
      "width": 427.57945754497143,
      "height": 115.4464535371423,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://687a6406-d29a-4b76-99b3-0d8343323c24",
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
      "_$id": "rzs1mya0",
      "_$type": "Box",
      "name": "title",
      "x": 3,
      "y": 2,
      "width": 745,
      "height": 120,
      "mouseEnabled": true,
      "_$child": [
        {
          "_$id": "f50fmlg3",
          "_$type": "Box",
          "name": "Box",
          "x": 17,
          "width": 714,
          "height": 56,
          "bgColor": "rgba(128, 86, 172, 1)"
        },
        {
          "_$id": "usjzxsk3",
          "_$type": "Image",
          "name": "Image",
          "x": 14.99999999999995,
          "width": 715,
          "height": 60,
          "skin": "res://8411c299-45f9-4865-aa35-709aca144e86",
          "color": "#ffffff"
        },
        {
          "_$id": "upjap8ug",
          "_$type": "Box",
          "name": "avatar",
          "x": -1,
          "width": 121,
          "height": 121,
          "_$comp": [
            {
              "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
              "scriptPath": "../src/ClickSound.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "r6sdsz57",
              "_$type": "Image",
              "name": "Image(1)",
              "x": 7,
              "y": 8,
              "width": 106,
              "height": 103.5,
              "skin": "res://00000000-0000-0000-0001-000000000000",
              "color": "#ffffff"
            },
            {
              "_$id": "qyjdg8vb",
              "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
              "name": "avatarclip",
              "active": true,
              "x": 13,
              "y": 15,
              "visible": true,
              "width": 93,
              "height": 93,
              "_$comp": [
                {
                  "_$type": "6391ac00-78b9-4858-83c1-49b4c5192fc5",
                  "scriptPath": "../src/MyselfAvatar.ts"
                }
              ]
            },
            {
              "_$id": "7orvzytu",
              "_$type": "Image",
              "name": "Image",
              "x": 1.7763568394002505e-15,
              "y": 1.687538997430238e-14,
              "width": 121,
              "height": 121,
              "skin": "res://0fda9958-06ee-4b6a-ab1c-fe9dfbf9a8f8",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "foe94s5k",
          "_$type": "Button",
          "name": "settings",
          "x": 662,
          "width": 83,
          "height": 83,
          "mouseEnabled": true,
          "stateNum": 2,
          "skin": "res://c35ba747-0789-4a01-a091-24514ed42549",
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
          "_$id": "pizo50xh",
          "_$type": "Image",
          "name": "goldcoin",
          "x": 409.2734634485812,
          "y": 8.9454971056211,
          "width": 237.68106970409812,
          "height": 43.733316825554034,
          "skin": "res://60a21851-71fd-44f0-a297-b362629a30f8",
          "color": "#ffffff",
          "_$comp": [
            {
              "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
              "scriptPath": "../src/ClickSound.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "yp0qtw8z",
              "_$type": "Image",
              "name": "Image",
              "x": -10,
              "y": -1.5987211554602254e-14,
              "width": 50.899408284023664,
              "height": 43.958579881656796,
              "skin": "res://aec558ec-3c6a-4cb2-8c19-0e8e68019854",
              "color": "#ffffff"
            },
            {
              "_$id": "l1m23pig",
              "_$type": "Label",
              "name": "gold",
              "x": 50,
              "y": 5,
              "width": 165.3109959274343,
              "height": 32.413920770085156,
              "text": "9999999999",
              "fontSize": 28,
              "color": "#FFFFFF",
              "valign": "bottom",
              "leading": 0,
              "padding": "0,0,0,0",
              "_$comp": [
                {
                  "_$type": "12b679ee-f2ac-4f30-9b77-97dedf5b62a2",
                  "scriptPath": "../src/MyselfGold.ts"
                }
              ]
            },
            {
              "_$id": "pqkkxy1v",
              "_$type": "Clip",
              "name": "Clip",
              "x": 4.862624587409989,
              "y": -7,
              "width": 38.13737541259,
              "height": 24.75485523352614,
              "anchorY": -0.16666666666666666,
              "autoPlay": true,
              "clipWidth": 30,
              "clipHeight": 30,
              "clipX": 7,
              "clipY": 1,
              "index": 6,
              "interval": 226,
              "skin": "res://43f3f361-b36c-4ed2-9c1f-5e85c9776d7a"
            },
            {
              "_$id": "1q3xbgcs",
              "_$type": "Clip",
              "name": "Clip(1)",
              "x": -18.13737541259001,
              "y": 10,
              "width": 47.91075781155648,
              "height": 30.108639620724137,
              "anchorY": -0.16666666666666666,
              "autoPlay": true,
              "clipWidth": 30,
              "clipHeight": 30,
              "clipX": 7,
              "clipY": 1,
              "index": 5,
              "interval": 199,
              "skin": "res://43f3f361-b36c-4ed2-9c1f-5e85c9776d7a"
            }
          ]
        },
        {
          "_$id": "hcfkoj97",
          "_$type": "Label",
          "name": "Label",
          "x": 140,
          "y": 16,
          "width": 59,
          "height": 26,
          "text": "LV.",
          "fontSize": 34,
          "color": "rgba(243, 202, 13, 1)",
          "bold": true,
          "leading": 0,
          "padding": "0,0,0,0"
        },
        {
          "_$id": "9ufohixi",
          "_$type": "Label",
          "name": "lv",
          "x": 200,
          "y": 16,
          "width": 120,
          "height": 26,
          "text": "3\n",
          "fontSize": 34,
          "color": "#FFFFFF",
          "leading": 0,
          "padding": "0,0,0,0",
          "_$comp": [
            {
              "_$type": "360a2a0b-2e0c-429a-a557-81908ba925ac",
              "scriptPath": "../src/MyselfLv.ts"
            }
          ]
        }
      ]
    },
    {
      "_$id": "lsq01jcr",
      "_$type": "Image",
      "name": "Image(1)",
      "x": 238,
      "y": 82,
      "width": 264.5,
      "height": 264.5,
      "skin": "res://9a029446-e9cb-4e8e-9909-e389aff3b283",
      "color": "#ffffff"
    }
  ]
}