class Car {
  constructor(nopol, pemilik) {
    this.nopol = nopol;
    this.pemilik = pemilik;
  }
}

class ParkingLot {
  constructor(capacity, remaining, cars) {
    this.capacity = capacity;
    this.remaining = remaining;
    this.cars = cars;
  }
}

const capacity = 0;
const remaining = 0;
const cars = [];

const info = new ParkingLot(capacity, remaining, cars);

const createPark = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      info.capacity = data;
      info.remaining = data;
      resolve(
        `Tempat parkir berhasil dibuat dengan kapasitas ${info.capacity} kendaraan.`
      );
    }, 5000);
  });
};

const park = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cek = info.cars.find(
        (car) => car.nopol === data.nopol && car.pemilik === data.pemilik
      );
      if (cek === undefined) {
        if (info.remaining <= info.capacity && info.remaining > 0) {
          Object.assign({}, cars);
          info.cars.push(data);
          info.remaining--;
          resolve(
            `Mobil ${data.pemilik} dengan Nopol ${data.nopol} berhasil parkir`
          );
        } else {
          reject("Mohoh maaf parkir sudah penuh");
        }
      } else {
        reject(
          `Mobil ${data.pemilik} dengan Nopol ${data.nopol} sudah parkir sebelumnya`
        );
      }
    }, 5000);
  });
};

function leave(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cek = info.cars.find((car) => car.nopol === data);
      if (cek !== undefined) {
        Object.assign({}, cars);
        info.cars.splice(
          info.cars.findIndex((car) => car.nopol === data.nopol)
        );
        info.remaining++;
        resolve(`Mobil ${cek.pemilik} dengan Nopol ${cek.nopol} sudah keluar`);
      } else {
        reject("Mobil dengan nopol B2019 tidak ada");
      }
    }, 1500);
  });
}

function check() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(info);
    }, 500);
  });
}

createPark(3)
  .then((value) => {
    console.log(value);
    return park(new Car("BE001", "Alex"));
  })
  .then((value) => {
    console.log(value);
    return check();
  })
  .then((value) => {
    console.log(value);
    return park(new Car("B2021", "Blex"));
  })
  .then((value) => {
    console.log(value);
    return leave("B2021");
  })
  .then((value) => {
    console.log(value);
    return park(new Car("C012", "Clex"));
  })
  .then((value) => {
    console.log(value);
    return park(new Car("D0101", "Dlex"));
  })
  .then((value) => {
    console.log(value);
    return leave("B2019");
  })
  .then((value) => {
    console.log(value);
    return park(new Car("0000", "Mobbil5"));
  })
  .then((value) => {
    console.log(value);
    return park(new Car("BE001", "Alex"));
  })
  .then((value) => {
    console.log(value);
    return leave("B2021");
  })
  .then((value) => {
    console.log(value);
    return check();
  })
  .then((value) => {
    console.log(value);
    return leave("BE001");
  })
  .then((value) => {
    console.log(value);
    return check();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((message) => {
    console.log(message);
  });
