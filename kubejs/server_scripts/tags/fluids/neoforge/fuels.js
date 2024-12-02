ServerEvents.tags('fluid', (event) => {
    event.get('c:fuels/crude_oil').add(['modern_industrialization:crude_oil', 'oritech:still_oil']);
    event.get('c:fuels/ethanol').add(['modern_industrialization:ethanol']);
    event.get('c:fuels/diesel').add(['modern_industrialization:diesel']);
    event.get('c:fuels/biodiesel').add(['modern_industrialization:biodiesel']);
    event.get('c:fuels/blaze_ember').add(['justdirethings:refined_t2_fluid_source']);
    event.get('c:fuels/voidflame').add(['justdirethings:refined_t3_fluid_source']);
    event.get('c:fuels/eclipse_ember').add(['justdirethings:refined_t4_fluid_source']);
    event.get('c:fuels/hootch').add(['enderio:fluid_hootch_still']);
    event.get('c:fuels/rocket_fuel').add(['enderio:fluid_rocket_fuel_still']);
    event.get('c:fuels/fire_water').add(['enderio:fluid_fire_water_still']);
    event.get('c:fuels/dew_of_the_void').add(['enderio:fluid_dew_of_the_void_still']);
    event.get('c:fuels/canola_oil').add(['actuallyadditions:canola_oil']);
    event.get('c:fuels/refined_canola_oil').add(['actuallyadditions:refined_canola_oil']);
    event.get('c:fuels/crystallized_oil').add(['actuallyadditions:crystallized_oil']);
    event.get('c:fuels/empowered_oil').add(['actuallyadditions:empowered_oil']);
    event.get('c:fuels/turbo_fuel').add(['oritech:still_fuel']);
});
