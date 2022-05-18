let soldier = {
  name: "ben",
  health: 10,
  weapon: {
    wname: "deagle",
    amo: 30,
  },
  supplies: 8,
  fire: function () {
 --this.amo;
    if (this.amo < 1) {
      return "обойма пуста перезаредитесь";
    }
    return "бах-бах";
  },
  recharge: function () {
    this.amo = 30;
    --this.supplies;
    if (this.supplies < 1) {
      return "не осталось припасов";
    }
    return "перезарядка";
  },
  hurt: function () {
    --this.health;
    if (this.health < 1) {
      return "ты проиграл";
    }
  },
};
//  все проверил жиес ;)