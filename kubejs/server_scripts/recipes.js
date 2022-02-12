//Remove Items
onEvent("recipes", (event) => {
    event.remove({ id: "cyclic:uncrafter" });

    //Copper Ore Fix
    event.remove({ id: 'cavesandcliffs:raw_copper' })
    event.remove({ id: 'cavesandcliffs:raw_copper_block' })
    event.remove({ id: 'thermal:storage/copper_block' })
    event.remove({ id: 'cavesandcliffs:copper_block' })

    event.remove({ id: 'tconstruct:common/materials/copper_block_from_ingots' })
    event.remove({ id: 'cavesandcliffs:copper_ingot' })
    event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_block' })
    event.remove({ id: 'thermal:storage/copper_ingot_from_block' })

    event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_nuggets' })
    event.remove({ id: 'thermal:storage/copper_ingot_from_nuggets' })

    event.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
    event.remove({ id: 'thermal:storage/copper_nugget_from_ingot' })


    event.remove({
        output: "betternether:quartz_glass",
    });

    event.smelting('betternether:quartz_glass', 'byg:quartz_crystal')

    //Project Architect Addition
    event.shaped('project_architect:emc_link_1', [
        'ODO',
        'DCD',
        'ODO'
    ], {
        O: 'minecraft:obsidian',
        D: 'projecte:dark_matter',
        C: 'projecte:condenser_mk1'
    });
    event.shaped('project_architect:emc_link_2', [
        'ODO',
        'DCD',
        'ODO'
    ], {
        O: 'minecraft:obsidian',
        D: 'project_architect:emc_link_1',
        C: 'projecte:condenser_mk1'
    });
    event.shaped('project_architect:emc_link_3', [
        'ODO',
        'DCD',
        'ODO'
    ], {
        O: 'minecraft:obsidian',
        D: 'project_architect:emc_link_2',
        C: 'projecte:condenser_mk1'
    });
    event.shaped('project_architect:emc_link_4', [
        'ODO',
        'DCD',
        'ODO'
    ], {
        O: 'minecraft:obsidian',
        D: 'project_architect:emc_link_3',
        C: 'projecte:condenser_mk1'
    });
    event.shaped('project_architect:emc_link_5', [
        'ODO',
        'DCD',
        'ODO'
    ], {
        O: 'minecraft:obsidian',
        D: 'project_architect:emc_link_4',
        C: 'projecte:condenser_mk2'
    });
    event.shaped('project_architect:emc_link_6', [
        'ODO',
        'DCD',
        'ODO'
    ], {
        O: 'minecraft:obsidian',
        D: 'project_architect:emc_link_5',
        C: 'projecte:condenser_mk2'
    });
    event.shaped('project_architect:emc_link_7', [
        'ODO',
        'DCD',
        'ODO'
    ], {
        O: 'minecraft:obsidian',
        D: 'project_architect:emc_link_6',
        C: 'projecte:condenser_mk2'
    });
    event.shaped('project_architect:emc_interface', [
        'ORO',
        'ICE',
        'OTO'
    ], {
        O: 'minecraft:obsidian',
        R: 'refinedstorage:network_receiver',
        I: 'refinedstorage:importer',
        C: 'projecte:condenser_mk2',
        E: 'refinedstorage:exporter',
        T: 'refinedstorage:network_transmitter'
    });
    event.shapeless('project_architect:emc_link_configurator', ['projecte:transmutation_table']);

});