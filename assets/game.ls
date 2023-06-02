{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$runtime": "res://8c577d42-46cc-4475-a29f-579458d7564e",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "game",
  "autoDestroyAtClosed": true,
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
      },
      "reward": {
        "_$uuid": "06164ce8-be3e-4019-b8ae-69a252482140",
        "_$type": "Prefab"
      },
      "loser": {
        "_$uuid": "2191a9de-75c1-4ec6-9a1a-a3ebf2dbee7f",
        "_$type": "Prefab"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "oql1cen0",
      "_$type": "Sprite",
      "name": "background",
      "width": 750,
      "height": 1334,
      "alpha": 0.98,
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
      "_filters": [
        {
          "_$type": "ColorFilter",
          "_color": "rgba(194, 201, 241, 1)",
          "_brightness": null,
          "_contrast": null,
          "_saturation": null,
          "_hue": null
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
      "_$id": "m48vibdz",
      "_$type": "Image",
      "name": "board",
      "x": 58,
      "y": 199,
      "width": 636.3045652367252,
      "height": 635.6232969655947,
      "skin": "res://fd1112d7-bf9f-4300-94e0-f9d4981cb094",
      "color": "#ffffff"
    },
    {
      "_$id": "7xaa4ym6",
      "_$type": "Sprite",
      "name": "universal",
      "x": 360,
      "y": 500,
      "width": 31.5,
      "height": 31.5,
      "_$child": [
        {
          "_$id": "ue2g43ow",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "0",
          "active": true,
          "x": -45,
          "y": 251,
          "visible": true,
          "bgColor": "rgba(255, 0, 0, 1)",
          "alpha": 0.51,
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 1
            }
          ],
          "_$child": [
            {
              "_$id": "3hyr3qgk",
              "_$index": 0,
              "_$type": "Image",
              "name": "Image",
              "x": 2,
              "y": 1,
              "width": 34,
              "height": 34,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "agumts0y",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "1",
          "active": true,
          "x": -45,
          "y": 209,
          "visible": true
        },
        {
          "_$id": "qo4p0ufz",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "2",
          "active": true,
          "x": -45,
          "y": 166,
          "visible": true
        },
        {
          "_$id": "fprjjpya",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "3",
          "active": true,
          "x": -45,
          "y": 124,
          "visible": true
        },
        {
          "_$id": "us4zyq6w",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "4",
          "active": true,
          "x": -45,
          "y": 82,
          "visible": true
        },
        {
          "_$id": "xbe4zaw7",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "5",
          "active": true,
          "x": -87,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "p2tawgio",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "6",
          "active": true,
          "x": -130,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "712s7zuy",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "7",
          "active": true,
          "x": -172,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "dfikr92o",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "8",
          "active": true,
          "x": -214,
          "y": 39,
          "visible": true,
          "bgColor": null,
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 0
            }
          ],
          "_$child": [
            {
              "_$id": "d0axgzl3",
              "_$type": "Image",
              "name": "Image",
              "x": 2,
              "y": 2,
              "width": 34,
              "height": 34,
              "alpha": 0.28,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#69adca"
            }
          ]
        },
        {
          "_$id": "chf2wu9b",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "9",
          "active": true,
          "x": -257,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "208bdk9g",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "10",
          "active": true,
          "x": -299,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "qjqrb3oy",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "11",
          "active": true,
          "x": -299,
          "y": -3,
          "visible": true,
          "_$child": [
            {
              "_$id": "qlgm84dy",
              "_$type": "Image",
              "name": "Image",
              "x": 7,
              "y": 10,
              "width": 28,
              "height": 16,
              "skin": "res://ff425710-3b43-48b1-bc29-25c6c371a0bd",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "0dhkgcuk",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "12",
          "active": true,
          "x": -299,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "myx9g8dx",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "13",
          "active": true,
          "x": -256,
          "y": -45,
          "visible": true,
          "bgColor": "rgba(0, 163, 0, 1)",
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 0
            }
          ],
          "_$child": [
            {
              "_$id": "7zrwgcx0",
              "_$index": 0,
              "_$type": "Image",
              "name": "Image(1)",
              "x": 2.000000000000057,
              "y": 0.9999999999997726,
              "width": 34,
              "height": 34,
              "alpha": 0.4,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "s3ype9zt",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "14",
          "active": true,
          "x": -214,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "v9jzmnnv",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "15",
          "active": true,
          "x": -172,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "2mkaise8",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "16",
          "active": true,
          "x": -129,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "tev1005a",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "17",
          "active": true,
          "x": -87,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "9yaejm1b",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "18",
          "active": true,
          "x": -44,
          "y": -87,
          "visible": true
        },
        {
          "_$id": "q599wst2",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "19",
          "active": true,
          "x": -44,
          "y": -130,
          "visible": true
        },
        {
          "_$id": "ssiqlxsz",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "20",
          "active": true,
          "x": -44,
          "y": -172,
          "visible": true
        },
        {
          "_$id": "7jgf4gqg",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "21",
          "active": true,
          "x": -45,
          "y": -214,
          "visible": true,
          "bgColor": null,
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 0
            }
          ],
          "_$child": [
            {
              "_$id": "ru1w2n31",
              "_$type": "Image",
              "name": "Image",
              "x": 2.9999999999998863,
              "y": 3,
              "width": 33.5,
              "height": 33.5,
              "alpha": 0.33,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "pagtbgh0",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "22",
          "active": true,
          "x": -45,
          "y": -256,
          "visible": true
        },
        {
          "_$id": "e5up88ie",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "23",
          "active": true,
          "x": -44,
          "y": -298,
          "visible": true
        },
        {
          "_$id": "azwlhb6r",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "24",
          "active": true,
          "x": -2,
          "y": -299,
          "visible": true,
          "_$child": [
            {
              "_$id": "u8yhtogm",
              "_$type": "Image",
              "name": "Image",
              "x": 10,
              "y": 6,
              "width": 16,
              "height": 28,
              "skin": "res://667d58c7-87c5-440d-ac59-b7a4cf41368e",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "6es96uai",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "25",
          "active": true,
          "x": 40,
          "y": -299,
          "visible": true
        },
        {
          "_$id": "xugteoiy",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "26",
          "active": true,
          "x": 40,
          "y": -257,
          "visible": true,
          "bgColor": "rgba(255, 196, 0, 1)",
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 1
            }
          ],
          "_$child": [
            {
              "_$id": "y6gg9oek",
              "_$index": 0,
              "_$type": "Image",
              "name": "Image(1)",
              "x": 2.000000000000057,
              "y": 1.9999999999998863,
              "width": 34,
              "height": 34,
              "alpha": 0.4,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "yvao2qkp",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "27",
          "active": true,
          "x": 40,
          "y": -214,
          "visible": true
        },
        {
          "_$id": "yrpguk4a",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "28",
          "active": true,
          "x": 40,
          "y": -172,
          "visible": true
        },
        {
          "_$id": "0vv0zfud",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "29",
          "active": true,
          "x": 40,
          "y": -129,
          "visible": true
        },
        {
          "_$id": "bv1ermw6",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "30",
          "active": true,
          "x": 40,
          "y": -87,
          "visible": true
        },
        {
          "_$id": "38anoq0g",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "31",
          "active": true,
          "x": 82,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "cenir7yl",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "32",
          "active": true,
          "x": 125,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "kpp0rbgu",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "33",
          "active": true,
          "x": 167,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "tn1qjimp",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "34",
          "active": true,
          "x": 209,
          "y": -45,
          "visible": true,
          "bgColor": null,
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 0
            }
          ],
          "_$child": [
            {
              "_$id": "z56dk1ry",
              "_$type": "Image",
              "name": "Image",
              "x": 3,
              "y": 3,
              "width": 34,
              "height": 33.5,
              "alpha": 0.33,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "jitbeyna",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "35",
          "active": true,
          "x": 252,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "3qcmdiza",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "36",
          "active": true,
          "x": 294,
          "y": -45,
          "visible": true
        },
        {
          "_$id": "8dfxcpyq",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "37",
          "active": true,
          "x": 293,
          "y": -3,
          "visible": true,
          "_$child": [
            {
              "_$id": "48kwqhlk",
              "_$type": "Image",
              "name": "Image",
              "x": 3,
              "y": 11,
              "width": 28,
              "height": 16,
              "skin": "res://1f919408-a275-4dad-8bcd-3111b7cd3dd9",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "bwnimtrx",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "38",
          "active": true,
          "x": 294,
          "y": 39,
          "visible": true
        },
        {
          "_$id": "7ha7izqj",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "39",
          "active": true,
          "x": 251,
          "y": 39,
          "visible": true,
          "bgColor": "rgba(0, 140, 248, 1)",
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 0
            }
          ],
          "_$child": [
            {
              "_$id": "qjy72wjs",
              "_$type": "Image",
              "name": "Image(2)",
              "x": 2,
              "y": 3,
              "width": 34,
              "height": 34,
              "alpha": 0.4,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "3xdcazmg",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "40",
          "active": true,
          "x": 209,
          "y": 39,
          "visible": true
        },
        {
          "_$id": "r9jk4nf8",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "41",
          "active": true,
          "x": 166,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "g7eu52s2",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "42",
          "active": true,
          "x": 125,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "dvfp4bhv",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "43",
          "active": true,
          "x": 82,
          "y": 40,
          "visible": true
        },
        {
          "_$id": "f9q0xpq3",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "44",
          "active": true,
          "x": 39,
          "y": 82,
          "visible": true
        },
        {
          "_$id": "yzxeembh",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "45",
          "active": true,
          "x": 40,
          "y": 125,
          "visible": true
        },
        {
          "_$id": "3jvfjhya",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "46",
          "active": true,
          "x": 40,
          "y": 166,
          "visible": true
        },
        {
          "_$id": "nmog5je3",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "47",
          "active": true,
          "x": 39,
          "y": 209,
          "visible": true,
          "bgColor": null,
          "_$comp": [
            {
              "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
              "safe": 0
            }
          ],
          "_$child": [
            {
              "_$id": "fyaqvfzh",
              "_$type": "Image",
              "name": "Image",
              "x": 2.999999999999943,
              "y": 2.999999999999943,
              "width": 33.5,
              "height": 33.5,
              "alpha": 0.33,
              "skin": "res://6bb29390-42ea-45b2-b60e-1a5cc35cc248",
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "wbjifsd0",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "48",
          "active": true,
          "x": 40,
          "y": 251,
          "visible": true
        },
        {
          "_$id": "6t8myb5k",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "49",
          "active": true,
          "x": 40,
          "y": 293,
          "visible": true
        },
        {
          "_$id": "834vqins",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "50",
          "active": true,
          "x": -2,
          "y": 293,
          "visible": true,
          "_$child": [
            {
              "_$id": "jzutr65r",
              "_$type": "Image",
              "name": "Image",
              "x": 9,
              "y": 1,
              "width": 16,
              "height": 28,
              "skin": "res://63f4363b-55f9-4905-a16e-0f27d42b24b4",
              "useSourceSize": true,
              "color": "#ffffff"
            }
          ]
        },
        {
          "_$id": "35qi90er",
          "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
          "name": "51",
          "active": true,
          "x": -45,
          "y": 293,
          "visible": true
        }
      ]
    },
    {
      "_$id": "oh6c4lul",
      "_$type": "Sprite",
      "name": "players",
      "x": 326,
      "y": 469,
      "width": 100,
      "height": 100,
      "_$child": [
        {
          "_$id": "hqy9lgmf",
          "_$prefab": "e0727edd-d6a4-4342-925e-21743d3e127e",
          "name": "red",
          "active": true,
          "x": -256.99999999999994,
          "y": 374.00000000000006,
          "visible": true,
          "disabled": false,
          "bgColor": null,
          "width": 197,
          "height": 107,
          "_$comp": [
            {
              "_$type": "c5f16793-ae8c-43aa-80e7-cdc3ce175664",
              "scriptPath": "../src/Player.ts",
              "entry": {
                "_$ref": "ue2g43ow"
              },
              "goal": {
                "_$ref": "u64bq3bj"
              },
              "door": {
                "_$ref": "834vqins"
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
              "crown": {
                "_$ref": "p4fglvnm"
              },
              "origin": {
                "_$ref": "h6q90dh9"
              },
              "room": {
                "_$ref": "lx8mwule",
                "_$type": "fed491b4-6b8a-46f9-8167-977c47e8a79b"
              },
              "chippy": [],
              "home": []
            }
          ],
          "_$child": [
            {
              "_$override": "sc3b00yx",
              "x": -10,
              "y": 5
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
              "_$id": "60gakblm",
              "_$prefab": "1dcec1e9-e936-4faa-80fa-30cf37e275b7",
              "_$index": 1,
              "name": "originbk",
              "active": true,
              "x": -9,
              "y": -261.00000000000006,
              "visible": false,
              "bgColor": "rgba(0, 0, 0, 1)"
            },
            {
              "_$id": "b7ycl5iq",
              "_$index": 2,
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
              "_$index": 3,
              "_$type": "Sprite",
              "name": "path",
              "x": 257.9999999999999,
              "y": -374.00000000000006,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "eya05ymp",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "0",
                  "active": true,
                  "x": 30,
                  "y": 284,
                  "visible": true,
                  "bgColor": "rgba(243, 0, 0, 1)"
                },
                {
                  "_$id": "uosu3lkw",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "1",
                  "active": true,
                  "x": 30,
                  "y": 242,
                  "visible": true,
                  "bgColor": "rgba(243, 15, 0, 1)"
                },
                {
                  "_$id": "7916xp5g",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "2",
                  "active": true,
                  "x": 30,
                  "y": 199,
                  "visible": true,
                  "bgColor": "rgba(243, 15, 0, 1)"
                },
                {
                  "_$id": "bwmrcedr",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "3",
                  "active": true,
                  "x": 30,
                  "y": 157,
                  "visible": true,
                  "bgColor": "rgba(243, 15, 0, 1)"
                },
                {
                  "_$id": "4jo8gq9i",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "4",
                  "active": true,
                  "x": 30,
                  "y": 115,
                  "visible": true,
                  "bgColor": "rgba(243, 15, 0, 1)"
                },
                {
                  "_$id": "u64bq3bj",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "5",
                  "active": true,
                  "x": 29,
                  "y": 72,
                  "visible": true,
                  "bgColor": "rgba(243, 15, 0, 1)"
                }
              ]
            },
            {
              "_$id": "h6q90dh9",
              "_$prefab": "a3995181-d890-4e9b-87c7-75ac4fb63d36",
              "_$index": 4,
              "name": "origin",
              "active": true,
              "x": 32,
              "y": -218,
              "visible": true,
              "_$child": [
                {
                  "_$override": "3ubclldw",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "nbm65fbg"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "e4x4xmeu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "68srqc97"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "nhfenhzp",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "kd87dtw1"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "k3onbzgu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "g45ccbxm"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "_$id": "37thijbt",
              "_$index": 5,
              "_$type": "Sprite",
              "name": "groove",
              "x": 77,
              "y": -174,
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
                  "width": 38,
                  "height": 38,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "3ubclldw"
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
                  "x": 41,
                  "y": -1.1368683772161603e-13,
                  "visible": true,
                  "width": 38,
                  "height": 38,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "e4x4xmeu"
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
                  "y": 42,
                  "visible": true,
                  "width": 38,
                  "height": 38,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "nhfenhzp"
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
                  "x": 41,
                  "y": 42,
                  "visible": true,
                  "width": 38,
                  "height": 38,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "h6q90dh9",
                          "k3onbzgu"
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
            },
            {
              "_$id": "p4fglvnm",
              "_$prefab": "28f808ae-0603-4959-878b-2010c8dc5664",
              "name": "crown",
              "active": true,
              "x": -10.000000000000057,
              "y": -260.00000000000006,
              "visible": false
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
                "_$ref": "myx9g8dx"
              },
              "goal": {
                "_$ref": "jamcuxu2"
              },
              "door": {
                "_$ref": "qjqrb3oy"
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
              "crown": {
                "_$ref": "f26bc4fu"
              },
              "origin": {
                "_$ref": "bj7phns4"
              },
              "room": {
                "_$ref": "lx8mwule",
                "_$type": "fed491b4-6b8a-46f9-8167-977c47e8a79b"
              },
              "chippy": [],
              "home": []
            }
          ],
          "_$child": [
            {
              "_$override": "sc3b00yx",
              "x": -12,
              "y": -40
            },
            {
              "_$id": "yi8aaacw",
              "_$prefab": "1dcec1e9-e936-4faa-80fa-30cf37e275b7",
              "_$index": 1,
              "name": "originbk",
              "active": true,
              "x": -12,
              "y": 81,
              "visible": false
            },
            {
              "_$id": "7c2mfmh6",
              "_$index": 2,
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
              "_$index": 3,
              "name": "origin",
              "active": true,
              "x": 32,
              "y": 123.00000000000006,
              "visible": true,
              "_$child": [
                {
                  "_$override": "3ubclldw",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "0nw714c6"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "e4x4xmeu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "imyw0xa8"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "nhfenhzp",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "bgo0nkml"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "k3onbzgu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "u4bao8vv"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "_$id": "ugpgd2q4",
              "_$index": 4,
              "_$type": "Sprite",
              "name": "path",
              "x": 255.99999999999994,
              "y": 347.99999999999994,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "unz1x99w",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "0",
                  "active": true,
                  "x": -223,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 163, 0, 1)"
                },
                {
                  "_$id": "qd79551o",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "1",
                  "active": true,
                  "x": -181,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 163, 0, 1)"
                },
                {
                  "_$id": "dt7nen2s",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "2",
                  "active": true,
                  "x": -139,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 163, 0, 1)"
                },
                {
                  "_$id": "n16nm47k",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "3",
                  "active": true,
                  "x": -97,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 163, 0, 1)"
                },
                {
                  "_$id": "tbvv0hnw",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "4",
                  "active": true,
                  "x": -54,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 163, 0, 1)"
                },
                {
                  "_$id": "jamcuxu2",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "5",
                  "active": true,
                  "x": -11,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 163, 0, 1)"
                }
              ]
            },
            {
              "_$id": "x1uq1m5z",
              "_$index": 5,
              "_$type": "Sprite",
              "name": "groove",
              "x": 76,
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
                  "x": 0,
                  "y": 0,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "3ubclldw"
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
                  "x": 41,
                  "y": 0,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "e4x4xmeu"
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
                  "x": 0,
                  "y": 42,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "nhfenhzp"
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
                  "x": 41,
                  "y": 42.00000000000017,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "bj7phns4",
                          "k3onbzgu"
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
            },
            {
              "_$id": "f26bc4fu",
              "_$prefab": "28f808ae-0603-4959-878b-2010c8dc5664",
              "name": "crown",
              "active": true,
              "x": -12.000000000000057,
              "y": 78.99999999999994,
              "visible": false
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
                "_$ref": "7ha7izqj"
              },
              "goal": {
                "_$ref": "wx4r6qlc"
              },
              "door": {
                "_$ref": "8dfxcpyq"
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
              "crown": {
                "_$ref": "36vb08z2"
              },
              "origin": {
                "_$ref": "ves81bgi"
              },
              "room": {
                "_$ref": "lx8mwule",
                "_$type": "fed491b4-6b8a-46f9-8167-977c47e8a79b"
              },
              "chippy": [],
              "home": []
            }
          ],
          "_$child": [
            {
              "_$override": "5a788y2g",
              "x": -32,
              "y": 5,
              "_$comp": [
                {
                  "_$override": "39d67820-6b75-4090-969f-b2fef892effc",
                  "avatar": {
                    "_$ref": [
                      "b7zhaso0",
                      "taf855d7"
                    ]
                  }
                },
                {
                  "_$override": "26418778-2a8b-4ac8-aa46-9e423be83978",
                  "diceDefault": {
                    "_$ref": [
                      "b7zhaso0",
                      "o95ydlsr"
                    ]
                  }
                }
              ]
            },
            {
              "_$id": "256t4cwd",
              "_$prefab": "1dcec1e9-e936-4faa-80fa-30cf37e275b7",
              "_$index": 1,
              "name": "originbk",
              "active": true,
              "x": -91,
              "y": -261,
              "visible": false
            },
            {
              "_$id": "vkqmkb6p",
              "_$index": 2,
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
              "_$index": 3,
              "name": "origin",
              "active": true,
              "x": -48,
              "y": -216.9999999999999,
              "visible": true,
              "_$child": [
                {
                  "_$override": "3ubclldw",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "zwy19hn7"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "e4x4xmeu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "yh2f5j3d"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "nhfenhzp",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "9ttbp8k8"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "k3onbzgu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "rm08tcwf"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "_$id": "o61g60ol",
              "_$index": 4,
              "_$type": "Sprite",
              "name": "path",
              "x": -204.00000000000006,
              "y": -374,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "b2lu0qm0",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "0",
                  "active": true,
                  "x": 284,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 140, 248, 1)"
                },
                {
                  "_$id": "82jrhhgr",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "1",
                  "active": true,
                  "x": 242,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 140, 248, 1)"
                },
                {
                  "_$id": "ts0urzy0",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "2",
                  "active": true,
                  "x": 200,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 140, 248, 1)"
                },
                {
                  "_$id": "vlsbbbsy",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "3",
                  "active": true,
                  "x": 157,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 140, 248, 1)"
                },
                {
                  "_$id": "1mg1pky0",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "4",
                  "active": true,
                  "x": 115,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 140, 248, 1)"
                },
                {
                  "_$id": "wx4r6qlc",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "5",
                  "active": true,
                  "x": 72,
                  "y": 30,
                  "visible": true,
                  "bgColor": "rgba(0, 140, 248, 1)"
                }
              ]
            },
            {
              "_$id": "etgip090",
              "_$index": 5,
              "_$type": "Sprite",
              "name": "groove",
              "x": -4,
              "y": -174,
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
                  "y": 0,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "3ubclldw"
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
                  "y": 0,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "e4x4xmeu"
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
                  "x": 0,
                  "y": 42,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "nhfenhzp"
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
                  "y": 42,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "ves81bgi",
                          "k3onbzgu"
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
            },
            {
              "_$id": "36vb08z2",
              "_$prefab": "28f808ae-0603-4959-878b-2010c8dc5664",
              "name": "crown",
              "active": true,
              "x": -91.00000000000006,
              "y": -261.00000000000006,
              "visible": false
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
                "_$ref": "xugteoiy"
              },
              "goal": {
                "_$ref": "cob4jpcv"
              },
              "door": {
                "_$ref": "azwlhb6r"
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
              "crown": {
                "_$ref": "4tlcx9lc"
              },
              "origin": {
                "_$ref": "2r52rn68"
              },
              "room": {
                "_$ref": "lx8mwule",
                "_$type": "fed491b4-6b8a-46f9-8167-977c47e8a79b"
              },
              "chippy": [],
              "home": []
            }
          ],
          "_$child": [
            {
              "_$override": "5a788y2g",
              "y": -40,
              "x": -25,
              "_$comp": [
                {
                  "_$override": "39d67820-6b75-4090-969f-b2fef892effc",
                  "avatar": {
                    "_$ref": [
                      "qs7wy01p",
                      "taf855d7"
                    ]
                  }
                },
                {
                  "_$override": "26418778-2a8b-4ac8-aa46-9e423be83978",
                  "diceDefault": {
                    "_$ref": [
                      "qs7wy01p",
                      "o95ydlsr"
                    ]
                  }
                }
              ]
            },
            {
              "_$id": "lks891a9",
              "_$prefab": "1dcec1e9-e936-4faa-80fa-30cf37e275b7",
              "_$index": 1,
              "name": "originbk",
              "active": true,
              "x": -85,
              "y": 77,
              "visible": false
            },
            {
              "_$id": "dw3zrzzu",
              "_$index": 2,
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
              "_$index": 3,
              "name": "origin",
              "active": true,
              "x": -43,
              "y": 120,
              "visible": true,
              "_$child": [
                {
                  "_$override": "3ubclldw",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "wgj8uq59"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "e4x4xmeu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "0jenco1b"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "nhfenhzp",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "6eqavlfy"
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$override": "k3onbzgu",
                  "width": 40,
                  "height": 40,
                  "_$comp": [
                    {
                      "_$override": "f65b0a36-8072-43b6-ba82-0cc45e25162f",
                      "chess": [
                        {
                          "_$ref": "9c1lv1a2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "_$id": "a7afqfrw",
              "_$index": 4,
              "_$type": "Sprite",
              "name": "path",
              "x": -198.00000000000006,
              "y": 345,
              "width": 100,
              "height": 100,
              "_$child": [
                {
                  "_$id": "j0vip9eg",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "0",
                  "active": true,
                  "x": 30,
                  "y": -223,
                  "visible": true,
                  "bgColor": "rgba(255, 196, 0, 1)"
                },
                {
                  "_$id": "m64dec33",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "1",
                  "active": true,
                  "x": 30,
                  "y": -181,
                  "visible": true,
                  "bgColor": "rgba(255, 196, 0, 1)"
                },
                {
                  "_$id": "ld9rg8ru",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "2",
                  "active": true,
                  "x": 30,
                  "y": -139,
                  "visible": true,
                  "bgColor": "rgba(255, 196, 0, 1)"
                },
                {
                  "_$id": "obmqjw17",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "3",
                  "active": true,
                  "x": 30,
                  "y": -97,
                  "visible": true,
                  "bgColor": "rgba(255, 196, 0, 1)"
                },
                {
                  "_$id": "p716bvtc",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "4",
                  "active": true,
                  "x": 30,
                  "y": -54,
                  "visible": true,
                  "bgColor": "rgba(255, 196, 0, 1)"
                },
                {
                  "_$id": "cob4jpcv",
                  "_$prefab": "ff7b353d-40d6-4daa-8a58-dc4a1d567ccf",
                  "name": "5",
                  "active": true,
                  "x": 30,
                  "y": -11,
                  "visible": true,
                  "bgColor": "rgba(255, 196, 0, 1)"
                }
              ]
            },
            {
              "_$id": "g2g1c6jq",
              "_$index": 5,
              "_$type": "Sprite",
              "name": "groove",
              "x": 2,
              "y": 164,
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
                  "y": 0,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "3ubclldw"
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
                  "x": 41,
                  "y": 0,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "e4x4xmeu"
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
                  "y": 42,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "nhfenhzp"
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
                  "x": 41,
                  "y": 42,
                  "visible": true,
                  "_$comp": [
                    {
                      "_$override": "2be80ad6-1bcc-440d-a7c9-809c6c1eef91",
                      "hole": {
                        "_$ref": [
                          "2r52rn68",
                          "k3onbzgu"
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
            },
            {
              "_$id": "4tlcx9lc",
              "_$prefab": "28f808ae-0603-4959-878b-2010c8dc5664",
              "name": "crown",
              "active": true,
              "x": -85.00000000000006,
              "y": 77.99999999999994,
              "visible": false
            }
          ]
        }
      ]
    },
    {
      "_$id": "a5gt28ns",
      "_$type": "Box",
      "name": "toolbar",
      "x": 60,
      "y": 16,
      "width": 632,
      "height": 43,
      "mouseEnabled": true,
      "_$comp": [
        {
          "_$type": "2eaec3fb-1805-4cbc-89c7-008aa7b68c01",
          "scriptPath": "../src/GameToolbar.ts",
          "backButton": {
            "_$ref": "fp6q39ed"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "fp6q39ed",
          "_$type": "Button",
          "name": "back",
          "width": 42.5,
          "height": 42.5,
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
        }
      ]
    }
  ]
}