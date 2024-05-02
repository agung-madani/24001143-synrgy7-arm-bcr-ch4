class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="w-[333px] h-[586px] mx-auto p-6">
        <div class="img-car h-[222px] w-[285px] mb-3" style="
          background: url(${this.image});
          background-size: cover;;
          background-position: center;">
        </div>
        <p class="font-normal text-sm mb-3">${this.manufacture} ${this.model}</p>
        <p class="font-bold text-base mb-3">Rp ${this.rentPerDay} / hari</p>
        <p class="font-light text-sm mb-3 w-[301px] h-[60px]">${this.description}</p>
        <ul class="mb-6">
          <li class="font-ligt text-sm"><i class="bi bi-people-fill mr-2"></i>${this.capacity} orang</li>
          <li class="font-ligt text-sm"><i class="bi bi-gear-fill mr-2"></i>${this.transmission}</li>
          <li class="font-ligt text-sm"><i class="bi bi-calendar mr-2"></i>Tahun ${this.year}</li>
        </ul>
        <button class="bg-limegreen-04 w-full h-12 font-bold text-sm text-white">Pilih Mobil</button>
      </div>
    `;
  }
}
