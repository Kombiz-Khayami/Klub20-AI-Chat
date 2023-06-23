import React from 'react';
import images from "./imagePaths.js";

function CourtyardCurios(){
    return (
        <><div className="wrapper-row">
        <div className="wrapper-curio">

          Bloodflowers

          <img src={images.curios.bloodflowers.path} />
        </div>
        <div className="wrapper-without-cleansing">

          <div className="item-without-cleansing">
            <img src={images.icons.stress.path} /> 8.5% Stress +15. The blossoms reek of death, pestilence and unfathomable nightmares!
          </div>

          <div className="item-without-cleansing">
            <img src={images.icons.scout.path} /> 23.1% Scouting. A map is nestled between the thorns and blossoms!
          </div>

          <div className="item-without-cleansing">
            <img src={images.icons.loot.path} /> 15.3% Any Loot x2 + 16.7% The Blood. The potting soil reveals its treasure!
          </div>

          <div className="item-without-cleansing">
            <img src={images.icons.disease.path} /> 5.1% Disease: Tetanus. Thorns hook into the flesh, a cloying sap seeps into the hero's blood!
          </div>

          <div className="item-without-cleansing">
            <img src={images.icons.disease.path} /> 2.5% Random Disease.
          </div>

          <div className="item-without-cleansing">
            <img src={images.icons.nothing.path} />15.3% Nothing. Apparently these ghoulish flowers are harmless.
          </div>

        </div>
        <div>
          <div className="items-cleansing">
            <img src={images.activators.theBlood.path} />
            <img src={images.icons.nothing.path} />Nothing
            The flowers surge with growth! But the blood invites no other occurence.
          </div>
          <div className="items-cleansing">
            <img src={images.activators.holyWater.path} />
            <img src={images.icons.stress.path} />+15 stress
            The wilting gives off a noxious odour!
          </div>

          <div className="items-cleansing">
            <img src={images.activators.shovel.path} />
            <img src={images.icons.portrait.path} />Gems/Heirlooms x2 66.7% OR Any Loot x1 33.3%
            Digging reveals loot!
          </div>
        </div>
      </div><div className="wrapper-row">
          <div className="wrapper-curio">

            Damned Fountain

            <img src={images.curios.damedFountain.path} />
          </div>
          <div className="wrapper-without-cleansing">


            <div className="item-without-cleansing">
              <img src={images.icons.bleed.path} /> 60% Bleed. The hero's scars weep open when bathed in the crimson fluid!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.disease.path} /> 20% Disease: Crimson Curse. This bloody artifact invites ailment!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} /> <img src={images.icons.bleed.path} /> 20% Any Loot x2 + 16.7% Bleed. Treasure lies in the gore-filled basin!
            </div>

          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.holyWater.path} />
              <img src={images.icons.stressHeal.path} /> Stress Heal 30
              The purified liquid offers a surprising boon!
            </div>
            <div className="items-cleansing">
              <img src={images.activators.torch.path} />
              <img src={images.icons.stress.path} />+5 stress
              Burning the blood stings the nostrils and turns the stomach
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">

            Disturbing Diversion

            <img src={images.curios.disturbingDiversion.path} />
          </div>
          <div className="wrapper-without-cleansing">

            <div className="item-without-cleansing">
              <img src={images.icons.stress.path} /> 40% Stress +25. You picture debauched and bloody games...
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.quirkPos.path} />  15% Random Positive Quirk.Suppressed desires awaken!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.quirkNeg.path} /> 15% Random Negative Quirk.Suppressed desires awaken!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} /> 10% Any Loot x2 + 16.7% The Blood x2.Wagers long forgotten.
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} /> 20% Nothing.The remains yield nothing.
            </div>

          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.shovel.path} />
              <img src={images.icons.portrait.path} /> Heirlooms x3
              What sadist put treasure in its skull?
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">

            <div className="curio-name">Forgotten Delicacies</div>

            <img src={images.curios.forgottenDelicacies.path} />
          </div>
          <div className="wrapper-without-cleansing">
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} />
              20% Gold/Supplies x4 + Supplies x1 + 25% The Blood. There are valuables scattered about the repast.
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.quirkNeg.path} />20% Negative Quirk: Stress Eater. What a peculiar flavour...
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.blight.path} /> 20% Blight. It is tainted!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.disease.path} />  13.3% Disease: Crimson Curse.There is nothing but rot inside the seemingly fresh morsels!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.disease.path} />6.7% Random Disease. There is nothing but rot inside the seemingly fresh morsels!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} />20% Nothing. There remains nothing worthy of your time.
            </div>
          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.medicinalHerbs.path} />
              <img src={images.icons.loot.path} /> Food x2 + Gold/Supplies x1
              Precise use of herbs purifies the tainted remains.
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">

            Hooded Shrew

            <img src={images.curios.hoodedShrew.path} />
          </div>
          <div className="wrapper-without-cleansing">


            <div className="item-without-cleansing">
              <img src={images.icons.stress.path} />
              42.8% Stress +15. The urchin's arcane mutterings stir deep terror within!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} />28.5% Any Loot x1. The shrew seems oblivious to the hero's pilfering.
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.disease.path} /> 7.6% Random Disease. The shrew's filthy grasp is like iron and its nails rake the hero!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} />  14.2% Nothing. The supplicant does not seem to notice the hero.
            </div>

          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.theBlood.path} />
              <img src={images.icons.loot.path} /> Trinket x2
              Blood for treasure
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">

            Wizened Shrew

            <img src={images.curios.wizenedShrew.path} />
          </div>
          <div className="wrapper-without-cleansing">


            <div className="item-without-cleansing">
              <img src={images.icons.disease.path} />
              7.6% Random Disease. The shrew's filthy grasp is like iron and its nails rake the hero!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.scout.path} />50% Scouting. A greasy vellum is proferred to the hero.
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} /> 33.3% "The being mutters an incantation..." and nothing happens. The shrew performs a strange ritual, but the results seem positive!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} />  25% Nothing. The supplicant is incoherent and penniless. Harmless.
            </div>

          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.theBlood.path} />
              <img src={images.icons.loot.path} /> Trinket x3
              From a hidden fold, the shrew offers up a rare treasure!
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">

            Pile of Strange Bones

            <img src={images.curios.pileOfStrangeBones.path} />
          </div>
          <div className="wrapper-without-cleansing">
            <div className="item-without-cleansing">
              <img src={images.icons.bleed.path} />
              50% Bleed. An insectoid mandible pierces the hero's skin!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} />20% Any Loot x2 + 16.7% The Blood. Baubles and other items of value are found in the grisly remains!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.disease.path} /> 10% Disease: Crimson Curse. Your blood is tainted with a strange infection!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} />  20% Nothing. These remains hold no danger nor anything of value either.
            </div>
          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.bandages.path} />
              <img src={images.icons.loot.path} /> Any Loot x1 (50%)
              These bones hold riches!
            </div>
            <div className="items-cleansing">
              <img src={images.activators.bandages.path} />
              <img src={images.activators.theBlood.path} className="blood-icon" /> Blood x1 16.7% (50%)
              These bones hold riches!
            </div>
            <div className="items-cleansing">
              <img src={images.activators.theBlood.path} />
              <img src={images.icons.summon.path} /> Summon a Supplicant, Sycophant & Esquire
              These bones hold riches!
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">

            Throbbing Coccoons

            <img src={images.curios.throbbingCoccoons.path} />
          </div>
          <div className="wrapper-without-cleansing">
            <div className="item-without-cleansing">
              <img src={images.icons.summon.path} />
              75% Summon a Supplicant, Sycophant & Esquire. Gestating creatures burst forth from the eggs!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} />12.5% Any Loot x3 + 16.7% The Blood. Valuables found beneath the eggs!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} />  12.5% Nothing. Disgusting viscera... and not much else.
            </div>
          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.torch.path} />
              <img src={images.icons.stressHeal.path} /> Stress Heal 30 (Courtyard only)
              Sweet relief as the eggs turn to ash.
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">
            Throbbing Hive
            <img src={images.curios.throbbingHive.path} />
          </div>
          <div className="wrapper-without-cleansing">
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} />75% Any Loot x2 + 20% Blood. The hive holds valuables!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.bleed.path} />
              25% Bleed. The hive's inhabitants sting and bite the hero's exposed flesh!
            </div>

          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.torch.path} />
              <img src={images.icons.loot.path} /> Any Loot x3 + 16.7% Blood
              The vermin sizzle and pop as the hive burns to ash.
            </div>
          </div>
        </div><div className="wrapper-row">
          <div className="wrapper-curio">
            Wine Crate
            <img src={images.curios.wineCrate.path} />
          </div>
          <div className="wrapper-without-cleansing">
            <div className="item-without-cleansing">
              <img src={images.icons.quirkNeg.path} />
              16.7% Negative Quirk: Tippler. A sip uncorks a disturbing new habit!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.scout.path} />
              8.3% Scouting. You find a map in an empty bottle!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.bleed.path} />
              8.3% Bleed. Take more care sorting through broken glass!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.loot.path} />41.7% The Blood (33.3%) x2 + Any Loot x1 + Gold/Supplies x4. There is loot in the broken glass!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.disease.path} /> 16.7% Disease: Crimson Curse. What terrible fortune!
            </div>
            <div className="item-without-cleansing">
              <img src={images.icons.nothing.path} />  8.3% Nothing. Nothing but broken glass and wood splinters.
            </div>
          </div>
          <div>
            <div className="items-cleansing">
              <img src={images.activators.shovel.path} />
              <img src={images.icons.firewood.path} /> Firewood
              Smashing the bottles reveals treasure!
            </div>
            <div className="items-cleansing">
              <img src={images.activators.bandages.path} />
              <img src={images.icons.stressHeal.path} /> Stress Heal 30
              A pleasant vintage!
            </div>
          </div>
        </div></>
  
    );
}

export default CourtyardCurios;