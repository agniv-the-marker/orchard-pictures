const dayDates = ["2024-11-16", "2024-11-23"];
const nightDates = ["2024-10-22", "2024-11-05", "2024-11-19"];

const dayImagesByDate = {
    "2024-11-16": [
        "./images/daytime/DSC_0001.webp",
        "./images/daytime/DSC_0002.webp",
        "./images/daytime/DSC_0003.webp",
        "./images/daytime/DSC_0004.webp",
        "./images/daytime/DSC_0005.webp",
        "./images/daytime/DSC_0006 (2).webp",
        "./images/daytime/DSC_0006.webp",
        "./images/daytime/DSC_0007 (3).webp",
        "./images/daytime/DSC_0007.webp",
        "./images/daytime/DSC_0008 (2).webp",
        "./images/daytime/DSC_0008.webp",
        "./images/daytime/DSC_0009 (3).webp",
        "./images/daytime/DSC_0009.webp",
        "./images/daytime/DSC_0010 (2).webp",
        "./images/daytime/DSC_0010.webp",
        "./images/daytime/DSC_0011 (2).webp",
        "./images/daytime/DSC_0011.webp",
        "./images/daytime/DSC_0012 (2).webp",
        "./images/daytime/DSC_0012.webp",
        "./images/daytime/DSC_0013 (2).webp",
        "./images/daytime/DSC_0013.webp",
        "./images/daytime/DSC_0014 (2).webp",
        "./images/daytime/DSC_0014.webp",
        "./images/daytime/DSC_0015 (3).webp",
        "./images/daytime/DSC_0015.webp",
        "./images/daytime/DSC_0016 (2).webp",
        "./images/daytime/DSC_0016.webp",
        "./images/daytime/DSC_0017.webp",
        "./images/daytime/DSC_0018.webp",
        "./images/daytime/DSC_0019.webp",
        "./images/daytime/DSC_0020.webp",
        "./images/daytime/DSC_0021.webp",
        "./images/daytime/DSC_0022 (2).webp",
        "./images/daytime/DSC_0023 (2).webp",
        "./images/daytime/DSC_0024 (2).webp",
        "./images/daytime/DSC_0025 (2).webp",
        "./images/daytime/DSC_0026 (2).webp",
        "./images/daytime/DSC_0027 (2).webp",
        "./images/daytime/DSC_0028 (2).webp",
        "./images/daytime/DSC_0029.webp",
        "./images/daytime/DSC_0030.webp",
        "./images/daytime/DSC_0031.webp",
        "./images/daytime/DSC_0032.webp",
        "./images/daytime/DSC_0033.webp",
        "./images/daytime/DSC_0034.webp",
        "./images/daytime/DSC_0035.webp"
    ],
    "2024-11-23": [
        "./images/daytime/DSC_0003 (2).webp",
        "./images/daytime/DSC_0004 (2).webp",
        "./images/daytime/DSC_0005 (2).webp",
        "./images/daytime/DSC_0006 (3).webp",
        "./images/daytime/DSC_0007 (2).webp",
        "./images/daytime/DSC_0008 (3).webp",
        "./images/daytime/DSC_0009 (2).webp",
        "./images/daytime/DSC_0010 (3).webp",
        "./images/daytime/DSC_0011 (3).webp",
        "./images/daytime/DSC_0012 (3).webp",
        "./images/daytime/DSC_0013 (3).webp",
        "./images/daytime/DSC_0014 (3).webp",
        "./images/daytime/DSC_0015 (2).webp",
        "./images/daytime/DSC_0016 (3).webp",
        "./images/daytime/DSC_0017 (2).webp",
        "./images/daytime/DSC_0018 (2).webp",
        "./images/daytime/DSC_0019 (2).webp",
        "./images/daytime/DSC_0020 (2).webp",
        "./images/daytime/DSC_0021 (2).webp",
        "./images/daytime/DSC_0022.webp",
        "./images/daytime/DSC_0023.webp",
        "./images/daytime/DSC_0024.webp",
        "./images/daytime/DSC_0025.webp",
        "./images/daytime/DSC_0026.webp",
        "./images/daytime/DSC_0027.webp",
        "./images/daytime/DSC_0028.webp",
        "./images/daytime/DSC_0029 (2).webp",
        "./images/daytime/DSC_0030 (2).webp",
        "./images/daytime/DSC_0031 (2).webp",
        "./images/daytime/DSC_0032 (2).webp",
        "./images/daytime/DSC_0033 (2).webp",
        "./images/daytime/DSC_0034 (2).webp",
        "./images/daytime/DSC_0035 (2).webp",
        "./images/daytime/DSC_0036.webp",
        "./images/daytime/DSC_0037.webp",
        "./images/daytime/DSC_0038.webp",
        "./images/daytime/DSC_0039.webp",
        "./images/daytime/DSC_0040.webp",
        "./images/daytime/DSC_0041.webp",
        "./images/daytime/DSC_0042.webp",
        "./images/daytime/DSC_0043.webp",
        "./images/daytime/DSC_0044.webp",
        "./images/daytime/DSC_0045.webp",
        "./images/daytime/DSC_0046.webp",
        "./images/daytime/DSC_0047.webp",
        "./images/daytime/DSC_0048.webp",
        "./images/daytime/DSC_0049.webp",
        "./images/daytime/DSC_0050.webp",
        "./images/daytime/DSC_0051.webp",
        "./images/daytime/DSC_0052.webp",
        "./images/daytime/DSC_0053.webp",
        "./images/daytime/DSC_0054.webp",
        "./images/daytime/DSC_0055.webp",
        "./images/daytime/DSC_0056.webp",
        "./images/daytime/DSC_0057.webp",
        "./images/daytime/DSC_0058.webp",
        "./images/daytime/DSC_0059.webp"
    ]
};
const nightImagesByDate = {
    "2024-11-05": [
        "./images/nighttime/DSC_0001.webp",
        "./images/nighttime/DSC_0002 (2).webp",
        "./images/nighttime/DSC_0002 (3).webp",
        "./images/nighttime/DSC_0003 (2).webp",
        "./images/nighttime/DSC_0003 (3).webp",
        "./images/nighttime/DSC_0004 (2).webp",
        "./images/nighttime/DSC_0004 (3).webp",
        "./images/nighttime/DSC_0005 (2).webp",
        "./images/nighttime/DSC_0006 (2).webp",
        "./images/nighttime/DSC_0006 (3).webp",
        "./images/nighttime/DSC_0007 (2).webp",
        "./images/nighttime/DSC_0008 (2).webp",
        "./images/nighttime/DSC_0009 (2).webp",
        "./images/nighttime/DSC_0010 (2).webp",
        "./images/nighttime/DSC_0011 (2).webp",
        "./images/nighttime/DSC_0012 (2).webp",
        "./images/nighttime/DSC_0013 (2).webp",
        "./images/nighttime/DSC_0014 (2).webp",
        "./images/nighttime/DSC_0015 (2).webp",
        "./images/nighttime/DSC_0016 (2).webp",
        "./images/nighttime/DSC_0017 (2).webp",
        "./images/nighttime/DSC_0018 (2).webp",
        "./images/nighttime/DSC_0019 (2).webp",
        "./images/nighttime/DSC_0020 (2).webp",
        "./images/nighttime/DSC_0021 (2).webp",
        "./images/nighttime/DSC_0022 (2).webp",
        "./images/nighttime/DSC_0023 (2).webp",
        "./images/nighttime/DSC_0024 (2).webp",
        "./images/nighttime/DSC_0025 (2).webp",
        "./images/nighttime/DSC_0026 (2).webp",
        "./images/nighttime/DSC_0027 (2).webp",
        "./images/nighttime/DSC_0028 (2).webp",
        "./images/nighttime/DSC_0029 (2).webp",
        "./images/nighttime/DSC_0030 (2).webp",
        "./images/nighttime/DSC_0031 (2).webp",
        "./images/nighttime/DSC_0032 (2).webp",
        "./images/nighttime/DSC_0033 (2).webp",
        "./images/nighttime/DSC_0034 (2).webp",
        "./images/nighttime/DSC_0035 (2).webp",
        "./images/nighttime/DSC_0036 (2).webp",
        "./images/nighttime/DSC_0037 (2).webp",
        "./images/nighttime/DSC_0038 (2).webp",
        "./images/nighttime/DSC_0039 (2).webp",
        "./images/nighttime/DSC_0040 (2).webp",
        "./images/nighttime/DSC_0041 (2).webp"
    ],
    "2024-10-22": [
        "./images/nighttime/DSC_0002.webp",
        "./images/nighttime/DSC_0003.webp",
        "./images/nighttime/DSC_0004.webp",
        "./images/nighttime/DSC_0005.webp",
        "./images/nighttime/DSC_0006.webp",
        "./images/nighttime/DSC_0007.webp",
        "./images/nighttime/DSC_0008.webp",
        "./images/nighttime/DSC_0009.webp",
        "./images/nighttime/DSC_0010.webp",
        "./images/nighttime/DSC_0011.webp",
        "./images/nighttime/DSC_0012.webp",
        "./images/nighttime/DSC_0013.webp",
        "./images/nighttime/DSC_0014.webp",
        "./images/nighttime/DSC_0015.webp",
        "./images/nighttime/DSC_0016.webp",
        "./images/nighttime/DSC_0017.webp",
        "./images/nighttime/DSC_0018.webp",
        "./images/nighttime/DSC_0019.webp",
        "./images/nighttime/DSC_0020.webp",
        "./images/nighttime/DSC_0021.webp",
        "./images/nighttime/DSC_0022.webp",
        "./images/nighttime/DSC_0023.webp",
        "./images/nighttime/DSC_0024.webp",
        "./images/nighttime/DSC_0025.webp",
        "./images/nighttime/DSC_0026.webp",
        "./images/nighttime/DSC_0027.webp",
        "./images/nighttime/DSC_0028.webp",
        "./images/nighttime/DSC_0029.webp",
        "./images/nighttime/DSC_0030.webp",
        "./images/nighttime/DSC_0031.webp",
        "./images/nighttime/DSC_0032.webp",
        "./images/nighttime/DSC_0033.webp",
        "./images/nighttime/DSC_0034.webp",
        "./images/nighttime/DSC_0035.webp",
        "./images/nighttime/DSC_0036.webp",
        "./images/nighttime/DSC_0037.webp",
        "./images/nighttime/DSC_0038.webp",
        "./images/nighttime/DSC_0039.webp",
        "./images/nighttime/DSC_0040.webp",
        "./images/nighttime/DSC_0041.webp",
        "./images/nighttime/DSC_0042.webp",
        "./images/nighttime/DSC_0043.webp",
        "./images/nighttime/DSC_0044.webp",
        "./images/nighttime/DSC_0045.webp",
        "./images/nighttime/DSC_0046.webp",
        "./images/nighttime/DSC_0047.webp",
        "./images/nighttime/DSC_0048.webp",
        "./images/nighttime/DSC_0049.webp"
    ],
    "2024-11-19": [
        "./images/nighttime/DSC_0004 (4).webp",
        "./images/nighttime/DSC_0005 (3).webp",
        "./images/nighttime/DSC_0006 (4).webp",
        "./images/nighttime/DSC_0007 (3).webp",
        "./images/nighttime/DSC_0008 (3).webp",
        "./images/nighttime/DSC_0009 (3).webp",
        "./images/nighttime/DSC_0010 (3).webp",
        "./images/nighttime/DSC_0011 (3).webp",
        "./images/nighttime/DSC_0012 (3).webp",
        "./images/nighttime/DSC_0013 (3).webp",
        "./images/nighttime/DSC_0014 (3).webp",
        "./images/nighttime/DSC_0015 (3).webp",
        "./images/nighttime/DSC_0016 (3).webp",
        "./images/nighttime/DSC_0017 (3).webp",
        "./images/nighttime/DSC_0018 (3).webp",
        "./images/nighttime/DSC_0019 (3).webp",
        "./images/nighttime/DSC_0020 (3).webp",
        "./images/nighttime/DSC_0021 (3).webp",
        "./images/nighttime/DSC_0022 (3).webp",
        "./images/nighttime/DSC_0023 (3).webp",
        "./images/nighttime/DSC_0024 (3).webp",
        "./images/nighttime/DSC_0025 (3).webp"
    ]
};
