{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "game",
  "_$child": [
    {
      "_$id": "ikgjaepj",
      "_$type": "Image",
      "name": "desk",
      "width": 640,
      "height": 1136,
      "skin": "res://d061e0a6-9110-4ae3-9fdd-9b58b82fd336",
      "color": "#ffffff"
    },
    {
      "_$id": "m48vibdz",
      "_$type": "Image",
      "name": "board",
      "y": 250,
      "width": 636.3045652367252,
      "height": 635.6232969655947,
      "skin": "res://fd1112d7-bf9f-4300-94e0-f9d4981cb094",
      "color": "#ffffff"
    },
    {
      "_$id": "6l1afqeh",
      "_$type": "Sprite",
      "name": "room",
      "x": 259.9999999999999,
      "y": 4.000000000000001,
      "width": 111,
      "height": 106,
      "_$comp": [
        {
          "_$type": "fed491b4-6b8a-46f9-8167-977c47e8a79b",
          "scriptPath": "../src/Room.ts",
          "redPlayer": {
            "_$ref": "hqy9lgmf"
          },
          "greenPlayer": {
            "_$ref": "hknjlm1h"
          },
          "bluePlayer": {
            "_$ref": "b7zhaso0"
          },
          "yellowPlayer": {
            "_$ref": "qs7wy01p"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "7xaa4ym6",
          "_$type": "Sprite",
          "name": "universal",
          "x": 41.99999999999994,
          "y": 548,
          "width": 31.5,
          "height": 31.5,
          "_$child": [
            {
              "_$id": "2xhdhs2f",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "0",
              "active": true,
              "x": -214,
              "y": 40,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "e3ae5b8d-b787-4412-854b-2c694a132fb2",
                  "scriptPath": "../src/Entry.ts"
                }
              ]
            },
            {
              "_$id": "e14tbxo5",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "1",
              "active": true,
              "x": -257,
              "y": 40,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "qro5cw3l",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "2",
              "active": true,
              "x": -299,
              "y": 40,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "5kt9ii9q",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "3",
              "active": true,
              "x": -299,
              "y": -3,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "zb97jf1m",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "4",
              "active": true,
              "x": -299,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "ligznfwt",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "5",
              "active": true,
              "x": -256,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "679087f6-f6b5-4a60-9f2e-ff9a7d356e0f",
                  "scriptPath": "../src/Door.ts",
                  "player": {
                    "_$ref": "hknjlm1h"
                  }
                }
              ]
            },
            {
              "_$id": "rixym1p1",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "6",
              "active": true,
              "x": -214,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "v5zjsf5i",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "7",
              "active": true,
              "x": -172,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "awh4tp4u",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "8",
              "active": true,
              "x": -130,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "hcnm3q82",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "9",
              "active": true,
              "x": -87,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "gtfxbsx5",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "10",
              "active": true,
              "x": -45,
              "y": -87,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "ol20dvbu",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "11",
              "active": true,
              "x": -45,
              "y": -129,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "tbejcg6j",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "12",
              "active": true,
              "x": -45,
              "y": -172,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "epcr8nn6",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "13",
              "active": true,
              "x": -45,
              "y": -214,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "e3ae5b8d-b787-4412-854b-2c694a132fb2",
                  "scriptPath": "../src/Entry.ts"
                }
              ]
            },
            {
              "_$id": "if1qr3yt",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "14",
              "active": true,
              "x": -45,
              "y": -257,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "xjd3pfkn",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "15",
              "active": true,
              "x": -45,
              "y": -299,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "fqf9y9eb",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "16",
              "active": true,
              "x": -3,
              "y": -299,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "h6lrpl7h",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "17",
              "active": true,
              "x": 39,
              "y": -299,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "wzixp1z8",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "18",
              "active": true,
              "x": 40,
              "y": -256,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "679087f6-f6b5-4a60-9f2e-ff9a7d356e0f",
                  "scriptPath": "../src/Door.ts",
                  "player": {
                    "_$ref": "qs7wy01p"
                  }
                }
              ]
            },
            {
              "_$id": "64jn7r17",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "19",
              "active": true,
              "x": 39,
              "y": -214,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "bykr4oxq",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "20",
              "active": true,
              "x": 39,
              "y": -172,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "is0g41l7",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "21",
              "active": true,
              "x": 39,
              "y": -130,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "4wwfjf3g",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "22",
              "active": true,
              "x": 39,
              "y": -87,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "16fd6z2b",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "23",
              "active": true,
              "x": 82,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "hst77dpj",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "24",
              "active": true,
              "x": 124,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "6jek906j",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "25",
              "active": true,
              "x": 166,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "8rcnc2sp",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "26",
              "active": true,
              "x": 208.99999999999994,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "e3ae5b8d-b787-4412-854b-2c694a132fb2",
                  "scriptPath": "../src/Entry.ts"
                }
              ]
            },
            {
              "_$id": "y9s0ntvv",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "27",
              "active": true,
              "x": 251,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "d6vplusb",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "28",
              "active": true,
              "x": 293,
              "y": -45,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "8mduggq3",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "29",
              "active": true,
              "x": 293,
              "y": -2,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "u7htyt6i",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "30",
              "active": true,
              "x": 293,
              "y": 39,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "2jhwsjlg",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "31",
              "active": true,
              "x": 251,
              "y": 40,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "679087f6-f6b5-4a60-9f2e-ff9a7d356e0f",
                  "scriptPath": "../src/Door.ts",
                  "player": {
                    "_$ref": "b7zhaso0"
                  }
                }
              ]
            },
            {
              "_$id": "k14xh2qt",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "32",
              "active": true,
              "x": 209,
              "y": 40,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "bwbcdf2u",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "33",
              "active": true,
              "x": 166,
              "y": 40,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "xx3dn95b",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "34",
              "active": true,
              "x": 124,
              "y": 39,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "dtb9c9l4",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "35",
              "active": true,
              "x": 82,
              "y": 40,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "0v6whsfx",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "36",
              "active": true,
              "x": 40,
              "y": 82,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "2c5mbom0",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "37",
              "active": true,
              "x": 40,
              "y": 124,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "0ohvergr",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "38",
              "active": true,
              "x": 40,
              "y": 166,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "f9hzncy6",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "39",
              "active": true,
              "x": 39,
              "y": 209,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "e3ae5b8d-b787-4412-854b-2c694a132fb2",
                  "scriptPath": "../src/Entry.ts"
                }
              ]
            },
            {
              "_$id": "cnmg4y1o",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "40",
              "active": true,
              "x": 39,
              "y": 251,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "nt33iuae",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "41",
              "active": true,
              "x": 39,
              "y": 293,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "lkfgkdj9",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "42",
              "active": true,
              "x": -3,
              "y": 293,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "c9fi9yeq",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "43",
              "active": true,
              "x": -45,
              "y": 293,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "1ppqscv2",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "44",
              "active": true,
              "x": -45,
              "y": 251,
              "visible": false,
              "width": 38,
              "height": 38,
              "_$comp": [
                {
                  "_$type": "679087f6-f6b5-4a60-9f2e-ff9a7d356e0f",
                  "scriptPath": "../src/Door.ts",
                  "player": {
                    "_$ref": "hqy9lgmf"
                  }
                }
              ]
            },
            {
              "_$id": "cgpqeja5",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "45",
              "active": true,
              "x": -45,
              "y": 209,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "102es1so",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "46",
              "active": true,
              "x": -45,
              "y": 167,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "tkm54zbx",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "47",
              "active": true,
              "x": -45,
              "y": 124,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "1t319nbx",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "48",
              "active": true,
              "x": -45,
              "y": 82,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "6d3jjlmm",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "49",
              "active": true,
              "x": -87,
              "y": 39,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "hji759wx",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "50",
              "active": true,
              "x": -130,
              "y": 39,
              "visible": false,
              "width": 38,
              "height": 38
            },
            {
              "_$id": "v920vg47",
              "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
              "name": "51",
              "active": true,
              "x": -172,
              "y": 39,
              "visible": false,
              "width": 38,
              "height": 38
            }
          ]
        }
      ]
    },
    {
      "_$id": "oh6c4lul",
      "_$type": "Sprite",
      "name": "players",
      "x": 269,
      "y": 521,
      "width": 100,
      "height": 100,
      "_$child": [
        {
          "_$id": "hqy9lgmf",
          "_$prefab": "e0727edd-d6a4-4342-925e-21743d3e127e",
          "name": "red",
          "active": true,
          "x": -257.99999999999994,
          "y": 372.00000000000006,
          "visible": true,
          "disabled": false,
          "bgColor": null,
          "_$comp": [
            {
              "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664",
              "scriptPath": "../src/Player.ts",
              "entry": {
                "_$ref": "2xhdhs2f"
              },
              "goal": {
                "_$ref": "6zlm8xkl"
              },
              "door": {
                "_$ref": "1ppqscv2"
              },
              "diceRoll": {
                "_$ref": [
                  "hqy9lgmf",
                  "dn8vhuyq"
                ]
              },
              "diceDefault": {
                "_$ref": [
                  "hqy9lgmf",
                  "dm1y2zws"
                ]
              },
              "groove": {
                "_$ref": "37thijbt"
              },
              "universal": {
                "_$ref": "7xaa4ym6"
              },
              "trade": {
                "_$ref": [
                  "hqy9lgmf",
                  "sc3b00yx"
                ]
              },
              "personal": {
                "_$ref": "jnr4fv9u"
              },
              "chessPrefab": {
                "_$uuid": "7fccce01-c779-4446-adce-948a5c3a712d",
                "_$type": "Prefab"
              }
            }
          ],
          "_$child": [
            {
              "_$override": "sc3b00yx",
              "x": -10,
              "y": 25
            },
            {
              "_$override": "dm1y2zws",
              "y": 0,
              "x": 92
            },
            {
              "_$override": "dn8vhuyq",
              "x": 91.5
            },
            {
              "_$id": "b7ycl5iq",
              "_$index": 1,
              "_$type": "Image",
              "name": "border",
              "x": 33.00000000000006,
              "y": -218.49190698130013,
              "width": 169.3225045505375,
              "height": 168.63975251605942,
              "skin": "res://469bf55c-cb52-45fe-be14-23a04e35ef7f",
              "color": "#ffffff"
            },
            {
              "_$id": "jnr4fv9u",
              "_$index": 2,
              "_$type": "Sprite",
              "name": "path",
              "x": 257.9999999999999,
              "y": -374.00000000000006,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "gtdebx29",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "0",
                  "active": true,
                  "x": 30.00000000000003,
                  "y": 284.0000000000001,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "qbsxojr7",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "1",
                  "active": true,
                  "x": 30.00000000000003,
                  "y": 242.0000000000001,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "jkm2qxzs",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "2",
                  "active": true,
                  "x": 30.00000000000003,
                  "y": 199.0000000000001,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "ys6bfnmr",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "3",
                  "active": true,
                  "x": 30.00000000000003,
                  "y": 157.0000000000001,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "0ap00vl8",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "4",
                  "active": true,
                  "x": 30.00000000000003,
                  "y": 115.00000000000011,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "6zlm8xkl",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "5",
                  "active": true,
                  "x": 32.00000000000003,
                  "y": 70,
                  "visible": false,
                  "width": 38,
                  "height": 38
                }
              ]
            },
            {
              "_$id": "h6q90dh9",
              "_$prefab": "a3995181-d890-4e9b-87c7-75ac4fb63d36",
              "_$index": 3,
              "name": "origin",
              "active": true,
              "x": 32,
              "y": -218,
              "visible": true,
              "_$child": [
                {
                  "_$override": "p59dqqpf",
                  "name": "0"
                }
              ]
            },
            {
              "_$id": "37thijbt",
              "_$type": "Sprite",
              "name": "groove",
              "x": 75.99999999999997,
              "y": -176.00000000000006,
              "width": 80,
              "height": 80,
              "_$comp": [
                {
                  "_$type": "9423b787-8e07-485d-bf20-a0797b54ba35",
                  "scriptPath": "../src/Groove.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "nbm65fbg",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "0",
                  "active": true,
                  "x": 0,
                  "y": -1.1368683772161603e-13,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "p59dqqpf"
                        ]
                      },
                      "player": {
                        "_$ref": "hqy9lgmf",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://cc9b06ff-c6b6-402d-862a-00efd407e43e"
                    }
                  ]
                },
                {
                  "_$id": "68srqc97",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "1",
                  "active": true,
                  "x": 41.00000000000006,
                  "y": -1.1368683772161603e-13,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "zbrikq5h"
                        ]
                      },
                      "player": {
                        "_$ref": "hqy9lgmf",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://cc9b06ff-c6b6-402d-862a-00efd407e43e"
                    }
                  ]
                },
                {
                  "_$id": "kd87dtw1",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "2",
                  "active": true,
                  "x": 0,
                  "y": 44,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "qy4hoqjh"
                        ]
                      },
                      "player": {
                        "_$ref": "hqy9lgmf",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://cc9b06ff-c6b6-402d-862a-00efd407e43e"
                    }
                  ]
                },
                {
                  "_$id": "g45ccbxm",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "3",
                  "active": true,
                  "x": 42.00000000000003,
                  "y": 44.000000000000114,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "fssqgfr1"
                        ]
                      },
                      "player": {
                        "_$ref": "hqy9lgmf",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://cc9b06ff-c6b6-402d-862a-00efd407e43e"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "hknjlm1h",
          "_$prefab": "e0727edd-d6a4-4342-925e-21743d3e127e",
          "name": "green",
          "active": true,
          "x": -255.99999999999994,
          "y": -349.99999999999994,
          "visible": true,
          "disabled": false,
          "bgColor": null,
          "_$comp": [
            {
              "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664",
              "scriptPath": "../src/Player.ts",
              "entry": {
                "_$ref": "epcr8nn6"
              },
              "goal": {
                "_$ref": "jmlipw9z"
              },
              "door": {
                "_$ref": "ligznfwt"
              },
              "diceRoll": {
                "_$ref": [
                  "hknjlm1h",
                  "dn8vhuyq"
                ]
              },
              "diceDefault": {
                "_$ref": [
                  "hknjlm1h",
                  "dm1y2zws"
                ]
              },
              "groove": {
                "_$ref": "x1uq1m5z"
              },
              "universal": {
                "_$ref": "7xaa4ym6"
              },
              "trade": {
                "_$ref": [
                  "hknjlm1h",
                  "sc3b00yx"
                ]
              },
              "personal": {
                "_$ref": "ugpgd2q4"
              },
              "chessPrefab": {
                "_$uuid": "7fccce01-c779-4446-adce-948a5c3a712d",
                "_$type": "Prefab"
              }
            }
          ],
          "_$child": [
            {
              "_$override": "sc3b00yx",
              "x": -12,
              "y": -55
            },
            {
              "_$id": "7c2mfmh6",
              "_$index": 1,
              "_$type": "Image",
              "name": "border",
              "x": 31.000000000000057,
              "y": 122.50809301869975,
              "width": 169.3225045505375,
              "height": 168.63975251605942,
              "skin": "res://39981a89-301b-4944-9b1c-ba25a52c1628",
              "color": "#ffffff"
            },
            {
              "_$id": "bj7phns4",
              "_$prefab": "a3995181-d890-4e9b-87c7-75ac4fb63d36",
              "_$index": 2,
              "name": "origin",
              "active": true,
              "x": 32,
              "y": 123.00000000000006,
              "visible": true
            },
            {
              "_$id": "ugpgd2q4",
              "_$index": 3,
              "_$type": "Sprite",
              "name": "path",
              "x": 255.99999999999994,
              "y": 347.99999999999994,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "p2bl7rio",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "0",
                  "active": true,
                  "x": -222.99999999999994,
                  "y": 31.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "b1mmoa17",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "1",
                  "active": true,
                  "x": -179.99999999999997,
                  "y": 31.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "b9pteals",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "2",
                  "active": true,
                  "x": -138.99999999999997,
                  "y": 31.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "mks2ox50",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "3",
                  "active": true,
                  "x": -96.99999999999997,
                  "y": 30.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "t3wj7d3j",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "4",
                  "active": true,
                  "x": -54.99999999999994,
                  "y": 31.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "jmlipw9z",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "5",
                  "active": true,
                  "x": -10.999999999999972,
                  "y": 30.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                }
              ]
            },
            {
              "_$id": "x1uq1m5z",
              "_$type": "Sprite",
              "name": "groove",
              "x": 76.99999999999994,
              "y": 165.9999999999999,
              "width": 80,
              "height": 80,
              "_$comp": [
                {
                  "_$type": "9423b787-8e07-485d-bf20-a0797b54ba35",
                  "scriptPath": "../src/Groove.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "0nw714c6",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "0",
                  "active": true,
                  "x": -1,
                  "y": 1.0000000000001705,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "p59dqqpf"
                        ]
                      },
                      "player": {
                        "_$ref": "hknjlm1h",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dea6246f-d4fd-47ad-9ef3-2bd177b80595"
                    }
                  ]
                },
                {
                  "_$id": "imyw0xa8",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "1",
                  "active": true,
                  "x": 40,
                  "y": 2.0000000000001705,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "zbrikq5h"
                        ]
                      },
                      "player": {
                        "_$ref": "hknjlm1h",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dea6246f-d4fd-47ad-9ef3-2bd177b80595"
                    }
                  ]
                },
                {
                  "_$id": "bgo0nkml",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "2",
                  "active": true,
                  "x": -1,
                  "y": 42.00000000000017,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "qy4hoqjh"
                        ]
                      },
                      "player": {
                        "_$ref": "hknjlm1h",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dea6246f-d4fd-47ad-9ef3-2bd177b80595"
                    }
                  ]
                },
                {
                  "_$id": "u4bao8vv",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "3",
                  "active": true,
                  "x": 40,
                  "y": 42.00000000000017,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "fssqgfr1"
                        ]
                      },
                      "player": {
                        "_$ref": "hknjlm1h",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dea6246f-d4fd-47ad-9ef3-2bd177b80595"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "b7zhaso0",
          "_$prefab": "a63c28bf-1403-48fd-b555-0dc4084f19a3",
          "name": "blue",
          "active": true,
          "x": 204,
          "y": 372,
          "visible": true,
          "disabled": false,
          "bgColor": null,
          "_$comp": [
            {
              "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664",
              "scriptPath": "../src/Player.ts",
              "entry": {
                "_$ref": "f9hzncy6"
              },
              "goal": {
                "_$ref": "xna9ttjy"
              },
              "door": {
                "_$ref": "2jhwsjlg"
              },
              "diceRoll": {
                "_$ref": [
                  "b7zhaso0",
                  "22dm2a74"
                ]
              },
              "diceDefault": {
                "_$ref": [
                  "b7zhaso0",
                  "o95ydlsr"
                ]
              },
              "groove": {
                "_$ref": "etgip090"
              },
              "universal": {
                "_$ref": "7xaa4ym6"
              },
              "trade": {
                "_$ref": [
                  "b7zhaso0",
                  "5a788y2g"
                ]
              },
              "personal": {
                "_$ref": "o61g60ol"
              },
              "chessPrefab": {
                "_$uuid": "7fccce01-c779-4446-adce-948a5c3a712d",
                "_$type": "Prefab"
              }
            }
          ],
          "_$child": [
            {
              "_$override": "5a788y2g",
              "x": -32,
              "y": 26
            },
            {
              "_$id": "vkqmkb6p",
              "_$index": 1,
              "_$type": "Image",
              "name": "border",
              "x": -48,
              "y": -218,
              "width": 169.3225045505375,
              "height": 168.63975251605942,
              "skin": "res://c9b9295c-4965-44d8-a24a-a7b3f90e0d29",
              "color": "#ffffff"
            },
            {
              "_$id": "ves81bgi",
              "_$prefab": "a3995181-d890-4e9b-87c7-75ac4fb63d36",
              "_$index": 2,
              "name": "origin",
              "active": true,
              "x": -48,
              "y": -216.9999999999999,
              "visible": true
            },
            {
              "_$id": "o61g60ol",
              "_$index": 3,
              "_$type": "Sprite",
              "name": "path",
              "x": -204.00000000000006,
              "y": -374,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "67zkek26",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "0",
                  "active": true,
                  "x": 284,
                  "y": 31.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "bbxyswx4",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "1",
                  "active": true,
                  "x": 242,
                  "y": 30.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "ojuy2i88",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "2",
                  "active": true,
                  "x": 200,
                  "y": 30.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "92ywjo8h",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "3",
                  "active": true,
                  "x": 157,
                  "y": 31.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "gbi1q8ni",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "4",
                  "active": true,
                  "x": 115,
                  "y": 30.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "xna9ttjy",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "5",
                  "active": true,
                  "x": 73,
                  "y": 30.000000000000114,
                  "visible": false,
                  "width": 38,
                  "height": 38
                }
              ]
            },
            {
              "_$id": "etgip090",
              "_$type": "Sprite",
              "name": "groove",
              "x": -3.0000000000001137,
              "y": -177.0000000000001,
              "width": 80,
              "height": 80,
              "_$comp": [
                {
                  "_$type": "9423b787-8e07-485d-bf20-a0797b54ba35",
                  "scriptPath": "../src/Groove.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "zwy19hn7",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "0",
                  "active": true,
                  "x": 0,
                  "y": 3,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "p59dqqpf"
                        ]
                      },
                      "player": {
                        "_$ref": "b7zhaso0",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ]
                },
                {
                  "_$id": "yh2f5j3d",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "1",
                  "active": true,
                  "x": 41,
                  "y": 4,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "zbrikq5h"
                        ]
                      },
                      "player": {
                        "_$ref": "b7zhaso0",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ]
                },
                {
                  "_$id": "9ttbp8k8",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "2",
                  "active": true,
                  "x": -1,
                  "y": 45,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "qy4hoqjh"
                        ]
                      },
                      "player": {
                        "_$ref": "b7zhaso0",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ]
                },
                {
                  "_$id": "rm08tcwf",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "3",
                  "active": true,
                  "x": 41,
                  "y": 46,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "fssqgfr1"
                        ]
                      },
                      "player": {
                        "_$ref": "b7zhaso0",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "qs7wy01p",
          "_$prefab": "a63c28bf-1403-48fd-b555-0dc4084f19a3",
          "name": "yellow",
          "active": true,
          "x": 198,
          "y": -347,
          "visible": true,
          "bgColor": null,
          "_$comp": [
            {
              "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664",
              "scriptPath": "../src/Player.ts",
              "entry": {
                "_$ref": "8rcnc2sp"
              },
              "goal": {
                "_$ref": "3v8nkaxb"
              },
              "door": {
                "_$ref": "wzixp1z8"
              },
              "diceRoll": {
                "_$ref": [
                  "qs7wy01p",
                  "22dm2a74"
                ]
              },
              "diceDefault": {
                "_$ref": [
                  "qs7wy01p",
                  "o95ydlsr"
                ]
              },
              "groove": {
                "_$ref": "g2g1c6jq"
              },
              "universal": {
                "_$ref": "7xaa4ym6"
              },
              "trade": {
                "_$ref": [
                  "qs7wy01p",
                  "5a788y2g"
                ]
              },
              "personal": {
                "_$ref": "a7afqfrw"
              },
              "chessPrefab": {
                "_$uuid": "7fccce01-c779-4446-adce-948a5c3a712d",
                "_$type": "Prefab"
              }
            }
          ],
          "_$child": [
            {
              "_$override": "5a788y2g",
              "y": -59,
              "x": -25
            },
            {
              "_$id": "dw3zrzzu",
              "_$index": 1,
              "_$type": "Image",
              "name": "border",
              "x": -43.00000000000017,
              "y": 120.50809301870004,
              "width": 169.3225045505375,
              "height": 168.63975251605942,
              "skin": "res://ecbfa6ea-62df-4992-99d7-3978a859c6b7",
              "color": "#ffffff"
            },
            {
              "_$id": "2r52rn68",
              "_$prefab": "a3995181-d890-4e9b-87c7-75ac4fb63d36",
              "_$index": 2,
              "name": "origin",
              "active": true,
              "x": -43,
              "y": 120,
              "visible": true
            },
            {
              "_$id": "a7afqfrw",
              "_$index": 3,
              "_$type": "Sprite",
              "name": "path",
              "x": -198.00000000000006,
              "y": 345,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "6qqo5wwb",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "0",
                  "active": true,
                  "x": 31.000000000000114,
                  "y": -223.9999999999999,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "mdmc32fs",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "1",
                  "active": true,
                  "x": 31.000000000000114,
                  "y": -180.9999999999999,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "fty9a7er",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "2",
                  "active": true,
                  "x": 30.000000000000114,
                  "y": -137.9999999999999,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "mx3w0hpc",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "3",
                  "active": true,
                  "x": 31.000000000000114,
                  "y": -96.99999999999989,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "734h9kap",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "4",
                  "active": true,
                  "x": 31.000000000000114,
                  "y": -53.999999999999886,
                  "visible": false,
                  "width": 38,
                  "height": 38
                },
                {
                  "_$id": "3v8nkaxb",
                  "_$prefab": "16a96e74-d6ea-45aa-8bce-72d8caec0786",
                  "name": "5",
                  "active": true,
                  "x": 31.00000000000003,
                  "y": -11.999999999999886,
                  "visible": false,
                  "width": 38,
                  "height": 38
                }
              ]
            },
            {
              "_$id": "g2g1c6jq",
              "_$type": "Sprite",
              "name": "groove",
              "x": 1,
              "y": 162,
              "width": 80,
              "height": 80,
              "_$comp": [
                {
                  "_$type": "9423b787-8e07-485d-bf20-a0797b54ba35",
                  "scriptPath": "../src/Groove.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "wgj8uq59",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "0",
                  "active": true,
                  "x": 0,
                  "y": 2,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "p59dqqpf"
                        ]
                      },
                      "player": {
                        "_$ref": "qs7wy01p",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dedec4c5-b830-42bf-abe4-0b0981aab7b4"
                    }
                  ]
                },
                {
                  "_$id": "0jenco1b",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "1",
                  "active": true,
                  "x": 42,
                  "y": 2,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "p59dqqpf"
                        ]
                      },
                      "player": {
                        "_$ref": "qs7wy01p",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dedec4c5-b830-42bf-abe4-0b0981aab7b4"
                    }
                  ]
                },
                {
                  "_$id": "6eqavlfy",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "2",
                  "active": true,
                  "x": 0,
                  "y": 45,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "p59dqqpf"
                        ]
                      },
                      "player": {
                        "_$ref": "qs7wy01p",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dedec4c5-b830-42bf-abe4-0b0981aab7b4"
                    }
                  ]
                },
                {
                  "_$id": "9c1lv1a2",
                  "_$prefab": "7fccce01-c779-4446-adce-948a5c3a712d",
                  "name": "3",
                  "active": true,
                  "x": 42,
                  "y": 45,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "p59dqqpf"
                        ]
                      },
                      "player": {
                        "_$ref": "qs7wy01p",
                        "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664"
                      }
                    }
                  ],
                  "_$child": [
                    {
                      "_$override": "t8h17dpc",
                      "skin": "res://dedec4c5-b830-42bf-abe4-0b0981aab7b4"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}