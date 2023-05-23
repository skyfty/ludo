{
  "_$ver": 1,
  "_$id": "etbxwadg",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Menu",
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
        "_$ref": "gxtjdxp2"
      },
      "parallel": {
        "_$uuid": "2c2ebf8d-515e-48c3-a5b6-9608800d2ad3",
        "_$type": "Prefab"
      }
    },
    {
      "_$type": "7e713f81-07d8-440c-a6dd-6f4538227cee",
      "scriptPath": "../src/Station.ts",
      "playerName": "sdfsdf"
    }
  ],
  "_$child": [
    {
      "_$id": "pklrsvsb",
      "_$type": "Button",
      "name": "Button",
      "x": 210,
      "y": 224,
      "width": 239.10000000000002,
      "height": 79.7,
      "mouseEnabled": true,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "电脑对战",
      "labelSize": 20
    },
    {
      "_$id": "mqsu2s73",
      "_$type": "Button",
      "name": "Button(1)",
      "x": 174,
      "y": 365,
      "width": 297.0000000000001,
      "height": 99,
      "mouseEnabled": true,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "ONLINE MULTIPLAYER",
      "labelSize": 20
    },
    {
      "_$id": "gxtjdxp2",
      "_$type": "Button",
      "name": "Button(2)",
      "x": 255,
      "y": 564,
      "width": 120,
      "height": 40,
      "mouseEnabled": true,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "Title",
      "labelSize": 20
    }
  ]
}