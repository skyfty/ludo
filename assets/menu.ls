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
      "parallel": {
        "_$uuid": "2c2ebf8d-515e-48c3-a5b6-9608800d2ad3",
        "_$type": "Prefab"
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
    },
    {
      "_$type": "29c2dcf8-e04c-4052-8f49-3bc9f10e9645",
      "scriptPath": "../src/Shelve.ts"
    }
  ],
  "_$child": [
    {
      "_$id": "xjmkpbl5",
      "_$type": "Sprite",
      "name": "Sprite",
      "x": 2.0000000000001137,
      "y": 4.000000000000028,
      "width": 746,
      "height": 1328,
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
      "width": 629,
      "height": 120,
      "mouseEnabled": true,
      "_$child": [
        {
          "_$id": "f50fmlg3",
          "_$type": "Box",
          "name": "Box",
          "width": 731,
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
              "y": 5,
              "width": 109,
              "height": 106.5,
              "skin": "res://00000000-0000-0000-0001-000000000000",
              "color": "#ffffff"
            },
            {
              "_$id": "pmqpnc19",
              "_$type": "Clip",
              "name": "Clip",
              "x": 13,
              "y": 15,
              "width": 93,
              "height": 93,
              "clipWidth": 142,
              "clipHeight": 142,
              "clipX": 3,
              "clipY": 3,
              "index": 0,
              "interval": 50,
              "skin": "res://18e8873a-666d-4d22-a2d0-0ed15061217f"
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