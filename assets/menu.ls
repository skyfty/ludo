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
      "host": "39.104.230.103",
      "port": 8080,
      "zone": "Ludo",
      "debug": false
    }
  ],
  "_$child": [
    {
      "_$id": "au6aouvz",
      "_$type": "Image",
      "name": "Image",
      "x": -197,
      "y": -361,
      "width": 1157.0758126745013,
      "height": 2084.3678122542756,
      "left": -197,
      "right": -325,
      "top": -361,
      "bottom": -587,
      "centerX": 64,
      "centerY": 113,
      "skin": "res://062a211d-d130-4021-9a56-215fbafda1f1",
      "color": "#ffffff"
    },
    {
      "_$id": "pklrsvsb",
      "_$type": "Button",
      "name": "vscomputer",
      "x": 131.60016049303462,
      "y": 273.3722218655712,
      "width": 404.4465301405922,
      "height": 109.3385632663542,
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
      "x": 130,
      "y": 430.2963985363035,
      "width": 404.4465301405922,
      "height": 109.3385632663542,
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
          "_$id": "usjzxsk3",
          "_$type": "Image",
          "name": "Image",
          "x": 14.99999999999995,
          "width": 605,
          "height": 60,
          "skin": "res://5e1e9ab3-d2f1-4cce-820e-7dd5cbfb670a",
          "color": "#ffffff"
        },
        {
          "_$id": "upjap8ug",
          "_$type": "Box",
          "name": "avatar",
          "x": -1.9999999999999716,
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
          "x": 549,
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
    }
  ]
}