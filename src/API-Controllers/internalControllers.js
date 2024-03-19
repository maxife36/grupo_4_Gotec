const path = require("path");

const pathDkm = path.resolve("src", "DOM-Controllers", "dkm-general-controller.js") 
const pathDkmProductDetail = path.resolve("src", "DOM-Controllers", "dkm-product-detail-controller.js") 
const pathProductDisplayDkMode = path.resolve("src", "DOM-Controllers", "dkm-productDisplay.js") 
const pathSubMenues = path.resolve("src", "DOM-Controllers", "sub-menu-controller.js") 
const pathForms = path.resolve("src", "DOM-Controllers", "register-form-controller.js") 
const pathHeader = path.resolve("src", "DOM-Controllers", "header-controller.js")
const pathSideCart = path.resolve("src", "DOM-Controllers", "sideCart-controller.js") 
const pathFavorites = path.resolve("src", "DOM-Controllers", "favorites-controllers.js") 
const pathMainControllers = path.resolve("src", "DOM-Controllers", "mainControllers.js") 
const pathProductDisplay = path.resolve("src", "DOM-Controllers", "productDisplay.js") 
const pathUserProfile = path.resolve("src", "DOM-Controllers", "userProfile.js") 
const pathUserData = path.resolve("src", "DOM-Controllers", "userData.js") 
const pathSecurityData = path.resolve("src", "DOM-Controllers", "securityData.js") 
const pathPurchases = path.resolve("src", "DOM-Controllers", "purchases.js") 

const controllers = {
    darkMode: (req,res) => res.sendFile(pathDkm),
    ProductDetailDkMode: (req,res) => res.sendFile(pathDkmProductDetail),
    ProductDisplayDkMode: (req,res) => res.sendFile(pathProductDisplayDkMode),
    subMenues:  (req,res) => res.sendFile(pathSubMenues),
    forms: (req,res) => res.sendFile(pathForms),
    header: (req,res) => res.sendFile(pathHeader),
    sideCart: (req,res) => res.sendFile(pathSideCart),
    favorites: (req,res) => res.sendFile(pathFavorites),
    mainControllers: (req,res) => res.sendFile(pathMainControllers),
    productDisplay: (req,res) => res.sendFile(pathProductDisplay),
    userProfile: (req,res) => res.sendFile(pathUserProfile),
    userData: (req,res) => res.sendFile(pathUserData),
    securityData: (req,res) => res.sendFile(pathSecurityData),
    purchases: (req,res) => res.sendFile(pathPurchases)
}

module.exports = controllers;