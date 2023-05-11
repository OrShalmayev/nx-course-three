const svgToTsConfig = {
    "conversionType": "files",
    "srcFiles": [
      "./src/svg-icons/**/*.svg"
    ],
    "outputDirectory": "./src/lib",
    "interfaceName": "SpotIcons",
    "typeName": "spotIcons",
    "prefix": "sptIcon",
    "optimizeForLazyLoading": true,
    "modelFileName": "spot-icons.model",
    "delimiter": "KEBAB",
    "compileSources": true,
    "exportCompleteIconSet": true,
    "completeIconSetName": "allIcons",
    "enumName": "SpotIconsName",
    "generateEnum": true,
    "generateType": true,
    svgoConfig: {
        plugins: [
            {
                name: 'prefixIds',
                params: {
                    separator: '_',
                    overrideIds: true
                }
            }
        ]
    },
}

module.exports = svgToTsConfig;
