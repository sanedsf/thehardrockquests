// priority: 0
onEvent('item.tooltip', tooltip => {
	tooltip.addAdvanced('create:vertical_gearbox', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Use brass wrench on normal gearbox'))
		  text.add(2, Text.gold('rotate him, give vertical gearbox'))
		}
	})
	tooltip.addAdvanced('minecraft:charcoal', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Need charcoals?  Place logs into the hole on stack'))
		  text.add(2, Text.gold('use fire starter burn it and fast cover solid block'))
		  text.add(3, Text.gold('wait patiently - long time when it  finish smoke'))
		}
	})
	tooltip.addAdvanced('kubejs:canoe', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('First boat had to be chiselled and burned from the wood' ))
			text.add(2, Text.red('important - you can chiseling only a few types of wood' ))
			text.add(3, Text.red('aspen, chestnut, douglas fir, kapok, pine, rosewoodspruce, white cedar, willow' ))
			text.add(4, Text.gold('- place 3 logs of wood horizontally on one line - stripped' ))
			text.add(5, Text.gold('- use saw and chiseling all logs, next use axe and chiseling all logs '))
			text.add(6, Text.gold('- use Fire Starter or Flint Steel and burn it on center '))
			text.add(7, Text.gold('- wait patiently '))
			text.add(8, Text.red(' Warning - you cant break the boat -  only carry '))
		}
	})
	tooltip.addAdvanced('minecraft:campfire', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Need create firepit' ))
			text.add(2, Text.gold('1 - put 1 log and 3 sticks on one block' ))
			text.add(3, Text.gold('2 - use Fire Starter or Flint Steel - burn it '))
			text.add(4, Text.gold('3 - more chance when you put optional - paper, straw, pinecones  '))
		}
	})
	tooltip.addAdvanced('minecraft:glass_bottle', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('its not only bottle' ))
			text.add(2, Text.gold('has a small amount of air' ))
			text.add(3, Text.gold('very useful when you diving'))
		}
	})
	tooltip.addAdvanced('mekanism:atomic_disassembler', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('this item is very useful' ))
			text.add(2, Text.gold('you will receive it when you reach engineer level 9' ))
		}
	})
	tooltip.addAdvanced('#forge:space_ores', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('mineral ores from other planets' ))
			text.add(2, Text.gold('You will only find them on the moon and other planets' ))
		}
	})
	tooltip.addAdvanced('#tfc:small_fishing_bait', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' you can use it ' ))
			text.add(2, Text.gold(' as bait in fishing ' ))
			text.add(3, Text.gold(' add baits and fishing rods ' ))
		}
	})
	tooltip.addAdvanced('#forge:dead_animal', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' hang a dead animal on a hook ' ))
			text.add(2, Text.gold(' use the knife and dissect the meat ' ))
			text.add(3, Text.gold(' Optionally you can bake them but you get less meat ' ))
		}
	})
	tooltip.addAdvanced('#tfc:drink_items', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' use this item to store drinking water ' ))
			text.add(2, Text.gold(' but be careful, fresh water can sometimes give you poisoning ' ))
			text.add(3, Text.gold(' drink only purified water ' ))
		}
	})
	tooltip.addAdvanced('#tfc:lamp_fuel', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' you can use it in a lamp ' ))
			text.add(2, Text.gold(' enough for a long burn time ' ))
		}
	})
	tooltip.addAdvanced('#minecraft:wool', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' this item filters sulfur in filter frames ' ))
			text.add(2, Text.gold(' filter Place where sulfur collects or on top of the chimney ' ))
		}
	})
	tooltip.addAdvanced('#forge:filters', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' this item filters dusts in filter frames ' ))
			text.add(2, Text.gold(' filter Place where dusts collects or on top of the chimney ' ))
		}
	})
	tooltip.addAdvanced('#forge:cloth', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' this item filters dusts in filter frames ' ))
			text.add(2, Text.gold(' filter Place where dusts collects or on top of the chimney ' ))
		}
	})
	tooltip.addAdvanced('#minecraft:leaves', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' this item filters carbon in filter frames ' ))
			text.add(2, Text.gold(' filter Place where carbon collects or on top of the chimney ' ))
		}
	})
	tooltip.addAdvanced('tfc:thatch', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' this item filters carbon in filter frames ' ))
			text.add(2, Text.gold(' filter Place where carbon collects or on top of the chimney ' ))
		}
	})
	tooltip.addAdvanced('myrtrees:latex', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' use "Tree Tap" and "Bucket for Latex" on Rubbertree ' ))
			text.add(2, Text.gold(' if you not find Tree use Rubber Sapling and Tree Fertilizer ' ))
			text.add(3, Text.gold(' wait when molten latex be fine ' ))
		}
	})
	tooltip.addAdvanced('farmersrespite:coffee_berries', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' coffee fruits can be found exceptionally on coffee bushes ' ))
			text.add(2, Text.gold(' they grow in the Nether in basalt biomes ' ))
			text.add(3, Text.gold(' The journey can be difficult but rewarding ' ))
		}
	})
	tooltip.addAdvanced('tfc:food/cattail_root', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' Cattail you find near water  ' ))
			text.add(2, Text.gold(' look for lakes and reservoirs of water ' ))
			text.add(3, Text.gold(' use knife - cut - maybe  drop root ' ))
		}
	})
	tooltip.add('waystones:waystone', ["heavy item to craft, don't lose it", 'will provide you with transport to the SPAWN and back'])
})