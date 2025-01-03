ServerEvents.tags('item', (event) => {
    let additions = [
        /storage_cell/,
        /portable_.*_cell/,
        /pneumaticcraft:.*_(tank|chest)$/,
        /pneumaticcraft:.*drone/,
        /sophisticated.*:.*(shulker|barrel|chest|backpack)/,
        /functionalstorage/,
        /mekanism:.*_(chest|tank|barrel)/,
        /mekanism:.*_bin$/,
        /mekanism:qio_drive/,
        /occultism:ritual_satchel_t\d/,
        /enderio:(pressurized_)?fluid_tank/,
        'ae2:view_cell',
        'occultism:storage_controller',
        'mekanism:cardboard_box',
        'occultism:soul_gem',
        'occultism:soul_shard',
        'occultism:satchel',
        'ars_nouveau:mob_jar',
        'ars_elemental:curio_bag',
        'ars_elemental:caster_bag',
        'ars_additions:handy_haversack',
        'evilcraft:dark_tank',
        'shrink:shrink_bottle',
        'enderio:crafter',
        'enderio:vacuum_chest',
        'toolbelt:belt'
    ];

    let exclusions = [
        /functionalstorage:.*(upgrade|downgrade|tool|controller)/,
        /mekanism:dynamic_(tank|valve)/,
        'mekanism:scuba_tank',
        'mekanism:radioactive_waste_barrel'
    ];
    event.get('modern_industrialization:replicator_blacklist').add(additions).remove(exclusions);
});
