ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:advanced_ae/reaction/';

    const recipes = [];

    event.forEachRecipe({ type: 'advanced_ae:reaction' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        switch (recipe_id) {
            case 'advanced_ae:singularity':
                recipe.input_energy = 500000000;
                recipe.id = recipe_id;
                break;
            case 'advanced_ae:shatteredsingularity':
            case 'advanced_ae:quantum_alloy':
            case 'advanced_ae:quantum_infusion':
            case 'advanced_ae:quantum_alloy_plate':
            case 'advanced_ae:redstonecrystal':
            case 'advanced_ae:certuscrystal':
            case 'advanced_ae:fluixcrystals':
            case 'advanced_ae:fluixcrystalfromdust':
                recipe.input_energy = recipe.input_energy * 100;
                recipe.id = recipe_id;
                break;
        }

        if (recipe.id) {
            recipes.push(recipe);
        }
    });

    recipes.forEach((recipe) => {
        recipe.type = 'advanced_ae:reaction';
        event.custom(recipe).id(recipe.id);
    });
});