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
      "buddy": {
        "_$ref": "p9nfamtu"
      },
      "avatar": {
        "_$ref": "upjap8ug"
      },
      "goldcoin": {
        "_$ref": "pizo50xh"
      },
      "buygoldcoin": {
        "_$ref": "ydixce6u"
      },
      "ranklist": {
        "_$ref": "ki4a9dg1"
      },
      "checkin": {
        "_$ref": "ufuvvwdb"
      },
      "level": {
        "_$ref": "95eiddvv"
      },
      "trims": {
        "_$ref": "jutu8ny7"
      }
    },
    {
      "_$type": "7e713f81-07d8-440c-a6dd-6f4538227cee",
      "scriptPath": "../src/Station.ts",
      "host": "39.104.230.103",
      "port": 8080,
      "zone": "Ludo",
      "debug": false
    },
    {
      "_$type": "fc5b90a5-bb9d-4c46-a1eb-22ca0f40b5cf",
      "scriptPath": "../src/TranslateLanguage.ts"
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
      "_$id": "w9fa3pkt",
      "_$type": "Box",
      "name": "Box",
      "x": 71,
      "y": 533,
      "width": 619,
      "height": 502,
      "mouseEnabled": true,
      "bottom": 299,
      "_$child": [
        {
          "_$id": "pklrsvsb",
          "_$type": "Button",
          "name": "vscomputer",
          "x": 1.000000000000071,
          "y": 11.735163425828546,
          "width": 616.7393978935586,
          "height": 151.40963743126107,
          "mouseEnabled": true,
          "stateNum": 2,
          "skin": "res://81906343-13e7-46b0-99ac-72f789289ed4",
          "label": "",
          "labelSize": 20,
          "labelBold": true,
          "labelVAlign": "middle",
          "_$comp": [
            {
              "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
              "scriptPath": "../src/ClickSound.ts"
            },
            {
              "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
              "scriptPath": "../src/Cause.ts",
              "act": "click",
              "trap": "vscomputer"
            }
          ],
          "_$child": [
            {
              "_$id": "g1etl9n5",
              "_$type": "Label",
              "name": "Label",
              "x": 234,
              "y": 16,
              "width": 343,
              "height": 114,
              "text": "VS COMPUTER",
              "font": "Tahoma",
              "fontSize": 33,
              "color": "#FFFFFF",
              "bold": true,
              "align": "center",
              "valign": "middle",
              "wordWrap": true,
              "leading": 0,
              "padding": "0,0,0,0",
              "stroke": 6,
              "strokeColor": "rgba(160, 160, 160, 1)",
              "_$comp": [
                {
                  "_$type": "95d9c950-3df0-48f6-983a-191d7ee0bdd1",
                  "scriptPath": "../src/TranslateLabel.ts"
                }
              ]
            }
          ]
        },
        {
          "_$id": "mqsu2s73",
          "_$type": "Button",
          "name": "online",
          "x": 1.000000000000071,
          "y": 178.0000000000001,
          "width": 616.7393978935586,
          "height": 152.40963743126107,
          "mouseEnabled": true,
          "stateNum": 2,
          "skin": "res://0e58c1b4-0806-4eee-adb5-1723c7de554b",
          "label": "",
          "labelSize": 20,
          "labelVAlign": "middle",
          "_$comp": [
            {
              "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
              "scriptPath": "../src/ClickSound.ts"
            },
            {
              "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
              "scriptPath": "../src/Cause.ts",
              "act": "click",
              "trap": "vsonline"
            }
          ],
          "_$child": [
            {
              "_$id": "cqpp4gng",
              "_$type": "Label",
              "name": "Label",
              "x": 223,
              "y": 18,
              "width": 355,
              "height": 114,
              "text": "ONLINE MULTIPLAYER",
              "font": "Tahoma",
              "fontSize": 33,
              "color": "#FFFFFF",
              "bold": true,
              "align": "center",
              "valign": "middle",
              "wordWrap": true,
              "leading": 0,
              "padding": "0,0,0,0",
              "stroke": 6,
              "strokeColor": "rgba(160, 160, 160, 1)",
              "_$comp": [
                {
                  "_$type": "95d9c950-3df0-48f6-983a-191d7ee0bdd1",
                  "scriptPath": "../src/TranslateLabel.ts"
                }
              ]
            }
          ]
        },
        {
          "_$id": "5wbt1gd9",
          "_$type": "Button",
          "name": "friends",
          "x": 1.000000000000071,
          "y": 344,
          "width": 616.7393978935586,
          "height": 157.40963743126107,
          "mouseEnabled": true,
          "stateNum": 2,
          "skin": "res://687a6406-d29a-4b76-99b3-0d8343323c24",
          "label": "",
          "labelSize": 20,
          "labelVAlign": "middle",
          "_$comp": [
            {
              "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
              "scriptPath": "../src/ClickSound.ts"
            },
            {
              "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
              "scriptPath": "../src/Cause.ts",
              "act": "click",
              "trap": "vsfriends"
            }
          ],
          "_$child": [
            {
              "_$id": "7g752mun",
              "_$type": "Label",
              "name": "Label",
              "x": 240,
              "y": 22,
              "width": 336,
              "height": 114,
              "text": "PLAY WITH FRIENDS",
              "font": "Tahoma",
              "fontSize": 33,
              "color": "#FFFFFF",
              "bold": true,
              "align": "center",
              "valign": "middle",
              "wordWrap": true,
              "leading": 0,
              "padding": "0,0,0,0",
              "stroke": 6,
              "strokeColor": "rgba(160, 160, 160, 1)",
              "_$comp": [
                {
                  "_$type": "95d9c950-3df0-48f6-983a-191d7ee0bdd1",
                  "scriptPath": "../src/TranslateLabel.ts"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_$id": "lsq01jcr",
      "_$type": "Image",
      "name": "Image(1)",
      "x": 242,
      "y": 82,
      "width": 264.5,
      "height": 264.5,
      "visible": false,
      "skin": "res://9a029446-e9cb-4e8e-9909-e389aff3b283",
      "color": "#ffffff"
    },
    {
      "_$id": "ki4a9dg1",
      "_$type": "Button",
      "name": "ranklist",
      "x": 644,
      "y": 259.25157629255983,
      "width": 83.19672131147536,
      "height": 103.16393442622945,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://b86621ff-1319-4a8d-8963-40698e57ad65",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
          "scriptPath": "../src/ClickSound.ts"
        },
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "ranklist"
        }
      ]
    },
    {
      "_$id": "ufuvvwdb",
      "_$type": "Button",
      "name": "checkin",
      "x": 629,
      "y": 138.57767135588148,
      "width": 113.57497755163129,
      "height": 86.41574378928465,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://845d7c64-1a5d-4065-bc8f-c5abd4b9557a",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "checkin"
        }
      ]
    },
    {
      "_$id": "p9nfamtu",
      "_$type": "Button",
      "name": "buddy",
      "x": 467,
      "y": 1205,
      "width": 83,
      "height": 83,
      "mouseEnabled": true,
      "left": 467,
      "bottom": 46,
      "stateNum": 2,
      "skin": "res://77bd2846-9777-435a-96de-f3a0a98199d0",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "buddy"
        }
      ]
    },
    {
      "_$id": "jutu8ny7",
      "_$type": "Button",
      "name": "trims",
      "x": 77,
      "y": 1205,
      "width": 83,
      "height": 83,
      "mouseEnabled": true,
      "left": 77,
      "bottom": 46,
      "stateNum": 2,
      "skin": "res://119274e4-8e4b-48da-ab33-f491f7513b22",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "trims"
        }
      ]
    },
    {
      "_$id": "uovhow40",
      "_$type": "Button",
      "name": "chess",
      "x": 337,
      "y": 1205,
      "width": 83,
      "height": 83,
      "mouseEnabled": true,
      "left": 337,
      "bottom": 46,
      "stateNum": 2,
      "skin": "res://36a4dbb9-727d-439d-8917-ad6f204e057f",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "chess"
        },
        {
          "_$type": "6f6d36c0-eff9-425c-8973-1f6d7fda2883",
          "scriptPath": "../src/Unfulfilment.ts",
          "tipLabel": {
            "_$ref": "kpjx8o6l"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "kpjx8o6l",
          "_$type": "Label",
          "name": "Label",
          "x": -43.00000000000006,
          "y": -45,
          "width": 206,
          "height": 40,
          "visible": false,
          "text": "it's comming soon",
          "fontSize": 20,
          "color": "rgba(255, 255, 255, 1)",
          "align": "center",
          "valign": "middle",
          "bgColor": "rgba(72, 72, 72, 1)",
          "borderColor": "rgba(255, 255, 255, 1)",
          "overflow": "hidden",
          "leading": 2,
          "padding": "0,0,0,0",
          "_$comp": [
            {
              "_$type": "95d9c950-3df0-48f6-983a-191d7ee0bdd1",
              "scriptPath": "../src/TranslateLabel.ts"
            }
          ]
        }
      ]
    },
    {
      "_$id": "aygeyek4",
      "_$type": "Button",
      "name": "dice",
      "x": 207,
      "y": 1205,
      "width": 83,
      "height": 83,
      "mouseEnabled": true,
      "left": 207,
      "bottom": 46,
      "stateNum": 2,
      "skin": "res://dabe26ed-0db8-4b24-be5c-0d2d5dea9ac5",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "dice"
        },
        {
          "_$type": "6f6d36c0-eff9-425c-8973-1f6d7fda2883",
          "scriptPath": "../src/Unfulfilment.ts",
          "tipLabel": {
            "_$ref": "wvg92dyz"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "wvg92dyz",
          "_$type": "Label",
          "name": "Label",
          "x": -56,
          "y": -47,
          "width": 206,
          "height": 44,
          "visible": false,
          "text": "it's comming soon",
          "fontSize": 20,
          "color": "rgba(255, 255, 255, 1)",
          "align": "center",
          "valign": "middle",
          "bgColor": "rgba(72, 72, 72, 1)",
          "borderColor": "rgba(255, 255, 255, 1)",
          "overflow": "hidden",
          "leading": 2,
          "padding": "0,0,0,0",
          "_$comp": [
            {
              "_$type": "95d9c950-3df0-48f6-983a-191d7ee0bdd1",
              "scriptPath": "../src/TranslateLabel.ts"
            }
          ]
        }
      ]
    },
    {
      "_$id": "95eiddvv",
      "_$type": "Button",
      "name": "gains",
      "x": 597,
      "y": 1205,
      "width": 83,
      "height": 83,
      "mouseEnabled": true,
      "left": 597,
      "bottom": 46,
      "stateNum": 2,
      "skin": "res://96ebfe08-9c70-4bc5-95e2-4c533f89dc6a",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "gains"
        }
      ]
    },
    {
      "_$id": "foe94s5k",
      "_$type": "Button",
      "name": "settings",
      "x": 644.9999999999999,
      "y": 14.000000000000004,
      "width": 83,
      "height": 83,
      "mouseEnabled": true,
      "stateNum": 2,
      "skin": "res://c35ba747-0789-4a01-a091-24514ed42549",
      "label": "",
      "labelSize": 20,
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
          "scriptPath": "../src/ClickSound.ts"
        },
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "settings"
        }
      ]
    },
    {
      "_$id": "6j8qzh0l",
      "_$type": "Sprite",
      "name": "level",
      "x": 16.999999999999993,
      "y": 170.00000000000003,
      "width": 207,
      "height": 46,
      "texture": {
        "_$uuid": "56607fd2-cf78-42c5-b515-0ae43368d50b",
        "_$type": "Texture"
      },
      "_$child": [
        {
          "_$id": "hcfkoj97",
          "_$type": "Label",
          "name": "Label",
          "x": 7.000000000000085,
          "y": 7.999999999999979,
          "width": 59,
          "height": 32,
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
          "x": 72,
          "y": 7.999999999999979,
          "width": 120,
          "height": 31,
          "text": "???",
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
      "_$id": "pizo50xh",
      "_$type": "Image",
      "name": "goldcoin",
      "x": 264,
      "y": 21.999999999999975,
      "width": 221.68106970409812,
      "height": 43.733316825554034,
      "mouseEnabled": true,
      "skin": "res://56607fd2-cf78-42c5-b515-0ae43368d50b",
      "color": "#ffffff",
      "_$comp": [
        {
          "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
          "scriptPath": "../src/ClickSound.ts"
        },
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "goldcoin"
        }
      ],
      "_$child": [
        {
          "_$id": "ydixce6u",
          "_$type": "Button",
          "name": "buygoldcoin",
          "x": 231,
          "width": 42.5,
          "height": 42.5,
          "mouseEnabled": true,
          "stateNum": 2,
          "skin": "res://bddd4ab0-249f-4df4-943b-ff1011c1226e",
          "label": "",
          "labelSize": 20,
          "labelVAlign": "middle"
        },
        {
          "_$id": "yp0qtw8z",
          "_$type": "Image",
          "name": "Image",
          "x": -2,
          "y": -5,
          "width": 50.899408284023664,
          "height": 43.958579881656796,
          "skin": "res://aec558ec-3c6a-4cb2-8c19-0e8e68019854",
          "color": "#ffffff"
        },
        {
          "_$id": "l1m23pig",
          "_$type": "Label",
          "name": "gold",
          "x": 45,
          "y": 5,
          "width": 167.3109959274343,
          "height": 34.413920770085156,
          "text": "0",
          "fontSize": 28,
          "color": "#FFFFFF",
          "align": "center",
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
          "index": 1,
          "interval": 226,
          "skin": "res://43f3f361-b36c-4ed2-9c1f-5e85c9776d7a"
        },
        {
          "_$id": "1q3xbgcs",
          "_$type": "Clip",
          "name": "Clip(1)",
          "x": -18.13737541259001,
          "y": -5,
          "width": 47.91075781155648,
          "height": 30.108639620724137,
          "anchorY": -0.16666666666666666,
          "autoPlay": true,
          "clipWidth": 30,
          "clipHeight": 30,
          "clipX": 7,
          "clipY": 1,
          "index": 6,
          "interval": 199,
          "skin": "res://43f3f361-b36c-4ed2-9c1f-5e85c9776d7a"
        }
      ]
    },
    {
      "_$id": "upjap8ug",
      "_$type": "Box",
      "name": "avatar",
      "x": 16.999999999999993,
      "y": 20.99999999999998,
      "width": 137,
      "height": 136,
      "_$comp": [
        {
          "_$type": "f4a9ed67-7b7a-43be-945e-88ba9965a9d4",
          "scriptPath": "../src/ClickSound.ts"
        },
        {
          "_$type": "930ddec0-d69d-475f-941b-734ec9d3d719",
          "scriptPath": "../src/Cause.ts",
          "act": "click",
          "trap": "avatar"
        }
      ],
      "_$child": [
        {
          "_$id": "7orvzytu",
          "_$type": "Image",
          "name": "Image",
          "x": -0.9999999999999982,
          "y": 1.7763568394002505e-14,
          "width": 136.5,
          "height": 136.5,
          "skin": "res://56607fd2-cf78-42c5-b515-0ae43368d50b",
          "color": "#ffffff"
        },
        {
          "_$id": "qyjdg8vb",
          "_$prefab": "09d5a55d-fe97-4b13-b580-b9f48d020006",
          "name": "avatarclip",
          "active": true,
          "x": 16.000000000000004,
          "y": 16,
          "visible": true,
          "width": 105,
          "height": 105,
          "index": 0,
          "clipY": 10,
          "_$comp": [
            {
              "_$type": "6391ac00-78b9-4858-83c1-49b4c5192fc5",
              "scriptPath": "../src/MyselfAvatar.ts"
            }
          ]
        },
        {
          "_$id": "89vysct8",
          "_$type": "Image",
          "name": "trim",
          "x": 3.5000000000000018,
          "y": 1.5000000000000142,
          "width": 129,
          "height": 129,
          "skin": "res://00052eb8-8712-4a40-bfc0-0e9709fb2c69",
          "color": "#ffffff",
          "_$comp": [
            {
              "_$type": "de3ddc02-0b18-42f2-9cc9-7367db4fcf46",
              "scriptPath": "../src/MyselfTrim.ts"
            }
          ]
        }
      ]
    }
  ]
}