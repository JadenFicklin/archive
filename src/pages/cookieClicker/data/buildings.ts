import cursor from "~/pages/cookieClicker/assets/buildingAssets/CursorIconTransparent.webp";

import grandmaIcon from "~/pages/cookieClicker/assets/buildingAssets/GrandmaIconTransparent.webp";
import grandmaBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/GrandmaNew.webp";
import grandmaBackground from "~/pages/cookieClicker/assets/buildingAssets/GrandmaBuildingBackground.webp";

import farmIcon from "~/pages/cookieClicker/assets/buildingAssets/FarmIconTransparent.webp";
import farmBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/Farm.webp";
import farmBackground from "~/pages/cookieClicker/assets/buildingAssets/FarmBackground.webp";

import mineIcon from "~/pages/cookieClicker/assets/buildingAssets/MineIconTransparent.webp";
import mineBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/MineNew.webp";
import mineBackground from "~/pages/cookieClicker/assets/buildingAssets/MineBackground.webp";

import factoryIcon from "~/pages/cookieClicker/assets/buildingAssets/FactoryIconTransparent.webp";
import factoryBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/FactoryNew.webp";
import factoryBackground from "~/pages/cookieClicker/assets/buildingAssets/FactoryBackground.webp";

import bankIcon from "~/pages/cookieClicker/assets/buildingAssets/BankIconLarge.webp";
import bankBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/Bank.webp";
import bankBackground from "~/pages/cookieClicker/assets/buildingAssets/BankBackground.webp";

import templeIcon from "~/pages/cookieClicker/assets/buildingAssets/TempleIconLarge.webp";
import templeBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/Temple.webp";
import templeBackground from "~/pages/cookieClicker/assets/buildingAssets/TempleBackground.webp";

import wizardTowerIcon from "~/pages/cookieClicker/assets/buildingAssets/WizardTowerIconLarge.webp";
import wizardTowerBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/Wizardtower.webp";
import wizardTowerBackground from "~/pages/cookieClicker/assets/buildingAssets/WizardTowerBackground.webp";

import timeMachineIcon from "~/pages/cookieClicker/assets/buildingAssets/TimeMachineIconTransparent.webp";
import timeMachineBackgroundIcon from "~/pages/cookieClicker/assets/buildingAssets/TimemachineNew.webp";
import timeMachineBackground from "~/pages/cookieClicker/assets/buildingAssets/TimeMachineBackground.webp";

export const buildings = [
  { name: "Cursor", basePrice: 15, cps: 0.1, icon: cursor },
  {
    name: "Grandma",
    basePrice: 100,
    cps: 1,
    icon: grandmaIcon,
    background: grandmaBackground,
    backgroundIcon: grandmaBackgroundIcon,
  },
  {
    name: "Farm",
    basePrice: 1100,
    cps: 8,
    icon: farmIcon,
    background: farmBackground,
    backgroundIcon: farmBackgroundIcon,
  },
  {
    name: "Mine",
    basePrice: 12000,
    cps: 47,
    icon: mineIcon,
    background: mineBackground,
    backgroundIcon: mineBackgroundIcon,
  },
  {
    name: "Factory",
    basePrice: 130000,
    cps: 260,
    icon: factoryIcon,
    background: factoryBackground,
    backgroundIcon: factoryBackgroundIcon,
  },
  {
    name: "Bank",
    basePrice: 1400000,
    cps: 1400,
    icon: bankIcon,
    background: bankBackground,
    backgroundIcon: bankBackgroundIcon,
  },
  {
    name: "Temple",
    basePrice: 20000000,
    cps: 7800,
    icon: templeIcon,
    background: templeBackground,
    backgroundIcon: templeBackgroundIcon,
  },
  {
    name: "Wizard Tower",
    basePrice: 330000000,
    cps: 44000,
    icon: wizardTowerIcon,
    background: wizardTowerBackground,
    backgroundIcon: wizardTowerBackgroundIcon,
  },
  {
    name: "Time Machine",
    basePrice: 5100000000,
    cps: 260000,
    icon: timeMachineIcon,
    background: timeMachineBackground,
    backgroundIcon: timeMachineBackgroundIcon,
  },
];
