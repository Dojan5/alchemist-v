import { Effect } from './effect.model';
export function defaultState(): Effect[] {
  let effects = [
    {
       "id":"000AE722",
       "name":"Cure Disease",
       "description":"Cures all diseases.",
       "baseCost":0.5,
       "baseMag":5,
       "baseDur":0
    },
    {
       "id":"0003EB42",
       "name":"Damage Health",
       "description":"Causes <mag> points of poison damage.",
       "baseCost":3,
       "baseMag":2,
       "baseDur":1
    },
    {
       "id":"0003A2B6",
       "name":"Damage Magicka",
       "description":"Drains the target's Magicka by <mag> points.",
       "baseCost":2.2,
       "baseMag":3,
       "baseDur":0
    },
    {
       "id":"00073F2B",
       "name":"Damage Magicka Regen",
       "description":"Decrease the target's Magicka regeneration by <mag>% for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":100,
       "baseDur":5
    },
    {
       "id":"0003A2C6",
       "name":"Damage Stamina",
       "description":"Drain the target's Stamina by <mag> points.",
       "baseCost":1.8,
       "baseMag":3,
       "baseDur":0
    },
    {
       "id":"00073F2C",
       "name":"Damage Stamina Regen",
       "description":"Decrease the target's Stamina regeneration by <mag>% for <dur> seconds.",
       "baseCost":0.3,
       "baseMag":100,
       "baseDur":5
    },
    {
       "id":"00073F20",
       "name":"Fear",
       "description":"Creatures and people up to level <mag> flee from combat for <dur> seconds.",
       "baseCost":5,
       "baseMag":1,
       "baseDur":30
    },
    {
       "id":"0003EB24",
       "name":"Fortify Alteration",
       "description":"Alteration spells last <mag>% longer for <dur> seconds.",
       "baseCost":0.2,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB23",
       "name":"Fortify Barter",
       "description":"You haggle for <mag>% better prices for <dur> seconds.",
       "baseCost":2,
       "baseMag":1,
       "baseDur":30
    },
    {
       "id":"0003EB1C",
       "name":"Fortify Block",
       "description":"Blocking absorbs <mag>% more damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB01",
       "name":"Fortify Carry Weight",
       "description":"Carrying capacity increases by <mag> for <dur> seconds.",
       "baseCost":0.15,
       "baseMag":4,
       "baseDur":300
    },
    {
       "id":"0003EB25",
       "name":"Fortify Conjuration",
       "description":"Conjurations spells last <mag>% longer for <dur> seconds.",
       "baseCost":0.25,
       "baseMag":5,
       "baseDur":60
    },
    {
       "id":"0003EB26",
       "name":"Fortify Destruction",
       "description":"Destruction spells are <mag>% stronger for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":5,
       "baseDur":60
    },
    {
       "id":"0003EB29",
       "name":"Fortify Enchanting",
       "description":"For <dur> seconds, items are enchanted <mag>% stronger.",
       "baseCost":0.6,
       "baseMag":1,
       "baseDur":30
    },
    {
       "id":"0003EAF3",
       "name":"Fortify Health",
       "description":"Health is increased by <mag> points for <dur> seconds.",
       "baseCost":0.35,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB1E",
       "name":"Fortify Heavy Armor",
       "description":"Increase Heavy Armor skill by <mag> points for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":2,
       "baseDur":60
    },
    {
       "id":"0003EB27",
       "name":"Fortify Illusion",
       "description":"Illusion spells are <mag>% stronger for <dur> seconds.",
       "baseCost":0.4,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB1F",
       "name":"Fortify Light Armor",
       "description":"Increases Light Armor skill by <mag> points for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":2,
       "baseDur":60
    },
    {
       "id":"0003EB21",
       "name":"Fortify Lockpicking",
       "description":"Lockpicking is <mag>% easier for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":2,
       "baseDur":30
    },
    {
       "id":"0003EAF8",
       "name":"Fortify Magicka",
       "description":"Magicka is increased by <mag> points for <dur> seconds.",
       "baseCost":0.3,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB1B",
       "name":"Fortify Marksman",
       "description":"Bows do <mag>% more damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB19",
       "name":"Fortify One-handed",
       "description":"One-handed weapons do <mag>% more damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB20",
       "name":"Fortify Pickpocket",
       "description":"Pickpocketing is <mag>% easier for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB28",
       "name":"Fortify Restoration",
       "description":"Restoration spells are <mag>% stronger for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB1D",
       "name":"Fortify Smithing",
       "description":"For <dur> seconds, weapon and armor improving is <mag>% better.",
       "baseCost":0.75,
       "baseMag":4,
       "baseDur":30
    },
    {
       "id":"0003EB22",
       "name":"Fortify Sneak",
       "description":"You are <mag>% harder to detect for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EAF9",
       "name":"Fortify Stamina",
       "description":"Stamina is increased by <mag> points for <dur> seconds.",
       "baseCost":0.3,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EB1A",
       "name":"Fortify Two-handed",
       "description":"Two-handed weapons do <mag>% more damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"00073F29",
       "name":"Frenzy",
       "description":"Creatures and people up to level <mag> will attack anything nearby for <dur> seconds.",
       "baseCost":15,
       "baseMag":1,
       "baseDur":10
    },
    {
       "id":"0003EB3D",
       "name":"Invisibility",
       "description":"Invisibility for <dur> seconds.",
       "baseCost":100,
       "baseMag":0,
       "baseDur":4
    },
    {
       "id":"0010AA4A",
       "name":"Lingering Damage Health",
       "description":"Causes <mag> points of poison damage for <dur> seconds.",
       "baseCost":12,
       "baseMag":1,
       "baseDur":10
    },
    {
       "id":"0010DE5F",
       "name":"Lingering Damage Magicka",
       "description":"Drains the target's Magicka by <mag> points per second for <dur> seconds.",
       "baseCost":10,
       "baseMag":1,
       "baseDur":10
    },
    {
       "id":"0010DE5E",
       "name":"Lingering Damage Stamina",
       "description":"Drain the target's Stamina by <mag> points per second for <dur> seconds.",
       "baseCost":1.8,
       "baseMag":1,
       "baseDur":10
    },
    {
       "id":"00073F30",
       "name":"Paralysis",
       "description":"Target is paralyzed for <dur> seconds.",
       "baseCost":500,
       "baseMag":0,
       "baseDur":1
    },
    {
       "id":"00073F26",
       "name":"Ravage Health",
       "description":"Causes <mag> points of concentrated poison damage.",
       "baseCost":0.4,
       "baseMag":2,
       "baseDur":10
    },
    {
       "id":"00073F27",
       "name":"Ravage Magicka",
       "description":"Concentrated poison damages maximum magicka by <mag> points.",
       "baseCost":1,
       "baseMag":2,
       "baseDur":10
    },
    {
       "id":"00073F23",
       "name":"Ravage Stamina",
       "description":"Concentrated poison damages maximum stamina by <mag> points.",
       "baseCost":1.6,
       "baseMag":2,
       "baseDur":10
    },
    {
       "id":"0003EB06",
       "name":"Regenerate Health",
       "description":"Health regenerates <mag>% faster for <dur> seconds.",
       "baseCost":0.1,
       "baseMag":5,
       "baseDur":300
    },
    {
       "id":"0003EB07",
       "name":"Regenerate Magicka",
       "description":"Magicka regenerates <mag>% faster for <dur> seconds.",
       "baseCost":0.1,
       "baseMag":5,
       "baseDur":300
    },
    {
       "id":"0003EB08",
       "name":"Regenerate Stamina",
       "description":"Stamina regenerates <mag>% faster for <dur> seconds.",
       "baseCost":0.1,
       "baseMag":5,
       "baseDur":300
    },
    {
       "id":"0003EAEA",
       "name":"Resist Fire",
       "description":"Resist <mag>% of fire damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":3,
       "baseDur":60
    },
    {
       "id":"0003EAEB",
       "name":"Resist Frost",
       "description":"Resist <mag>% of frost damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":3,
       "baseDur":60
    },
    {
       "id":"00039E51",
       "name":"Resist Magic",
       "description":"Resist <mag>% of magic for <dur> seconds.",
       "baseCost":1,
       "baseMag":1,
       "baseDur":60
    },
    {
       "id":"00090041",
       "name":"Resist Poison",
       "description":"Resist <mag>% of poison for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":4,
       "baseDur":60
    },
    {
       "id":"0003EAEC",
       "name":"Resist Shock",
       "description":"Resist <mag>% of shock damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":3,
       "baseDur":60
    },
    {
       "id":"0003EB15",
       "name":"Restore Health",
       "description":"Restore <mag> points of Health.",
       "baseCost":0.5,
       "baseMag":5,
       "baseDur":0
    },
    {
       "id":"0003EB17",
       "name":"Restore Magicka",
       "description":"Restore <mag> points of Magicka.",
       "baseCost":0.6,
       "baseMag":5,
       "baseDur":0
    },
    {
       "id":"0003EB16",
       "name":"Restore Stamina",
       "description":"Restore <mag> Stamina.",
       "baseCost":0.6,
       "baseMag":5,
       "baseDur":0
    },
    {
       "id":"00073F25",
       "name":"Slow",
       "description":"Target moves at 50% speed for <dur> seconds.",
       "baseCost":1,
       "baseMag":50,
       "baseDur":5
    },
    {
       "id":"0003AC2D",
       "name":"Waterbreathing",
       "description":"Can breathe underwater for <dur> seconds.",
       "baseCost":30,
       "baseMag":0,
       "baseDur":5
    },
    {
       "id":"00073F2D",
       "name":"Weakness to Fire",
       "description":"Target is <mag>% weaker to fire damage for <dur> seconds.",
       "baseCost":0.6,
       "baseMag":3,
       "baseDur":30
    },
    {
       "id":"00073F2E",
       "name":"Weakness to Frost",
       "description":"Target is <mag>% weaker to frost damage for <dur> seconds.",
       "baseCost":0.5,
       "baseMag":3,
       "baseDur":30
    },
    {
       "id":"00073F51",
       "name":"Weakness to Magic",
       "description":"Target is <mag>% weaker to magic for <dur> seconds.",
       "baseCost":1,
       "baseMag":2,
       "baseDur":30
    },
    {
       "id":"00090042",
       "name":"Weakness to Poison",
       "description":"Target is <mag>% weaker to poison for <dur> seconds.",
       "baseCost":1,
       "baseMag":2,
       "baseDur":30
    },
    {
       "id":"00073F2F",
       "name":"Weakness to Shock",
       "description":"Target is <mag>% weaker to shock damage for <dur> seconds.",
       "baseCost":0.7,
       "baseMag":3,
       "baseDur":30
    }
  ]

  return effects;
}