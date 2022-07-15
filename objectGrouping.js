 const humans = [
        {
          name: "Gena",
          gender: "women",
        },
        {
          name: "Mars",
          gender: "man",
        },
        {
          name: "Michel",
          gender: "man",
        },
        {
          name: "Serra",
          gender: "women",
        },
        {
          name: "Serenica",
          gender: "women",
        },
        {
          name: "Forth",
          gender: "man",
        },
      ];
      let arr = [];
      let lastArr = [];

      humans.forEach((item) => {
        if (!arr.includes(item.gender)) {
          arr.push(item.gender);
        }
      });
      humans.forEach((item) => {
        arr.forEach((groups, index) => {
          if (item.gender == groups) {
            if (lastArr[index] == undefined) {
              lastArr[index] = [];
            }
            lastArr[index].push(item);
          }
        });
      });
      console.log(lastArr);

      /*
      [
        [
            0: {name: 'Gena', gender: 'women'}
            1: {name: 'Serra', gender: 'women'}
            2: {name: 'Serenica', gender: 'women'}
        ],
        [
            0: {name: 'Mars', gender: 'man'}
            1: {name: 'Michel', gender: 'man'}
            2: {name: 'Forth', gender: 'man'}
        ]
     ]
     */
