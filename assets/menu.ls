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
      "_$id": "au6aouvz",
      "_$type": "Image",
      "name": "Image",
      "x": 1,
      "y": -8,
      "width": 632.1856159674642,
      "height": 1138.825420822629,
      "left": 1,
      "right": 2,
      "top": -8,
      "bottom": 5,
      "centerX": 0,
      "centerY": -7,
      "skin": "res://062a211d-d130-4021-9a56-215fbafda1f1",
      "color": "#ffffff"
    },
    {
      "_$id": "pklrsvsb",
      "_$type": "Button",
      "name": "Button",
      "x": 131.60016049303462,
      "y": 273.3722218655712,
      "width": 404.4465301405922,
      "height": 109.3385632663542,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://81906343-13e7-46b0-99ac-72f789289ed4",
      "label": "",
      "labelSize": 20
    },
    {
      "_$id": "mqsu2s73",
      "_$type": "Button",
      "name": "Button(1)",
      "x": 130,
      "y": 430.2963985363035,
      "width": 404.4465301405922,
      "height": 109.3385632663542,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://0e58c1b4-0806-4eee-adb5-1723c7de554b",
      "label": "",
      "labelSize": 20
    },
    {
      "_$id": "gxtjdxp2",
      "_$type": "Button",
      "name": "Button(2)",
      "x": 111,
      "y": 725,
      "width": 120,
      "height": 40,
      "visible": false,
      "mouseEnabled": true,
      "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
      "label": "Title",
      "labelSize": 20
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
              "_$id": "fwcmnrv8",
              "_$type": "Image",
              "name": "Image(2)",
              "x": 23,
              "y": 26,
              "width": 71.5,
              "height": 71.5,
              "skin": "res://0b1164ee-90fe-423d-8f67-3c9db0bf4be5",
              "color": "#ffffff"
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
          "name": "Button",
          "x": 549,
          "width": 83,
          "height": 83,
          "mouseEnabled": true,
          "stateNum": 2,
          "skin": "res://c35ba747-0789-4a01-a091-24514ed42549",
          "label": "",
          "labelSize": 20
        }
      ]
    }
  ]
}