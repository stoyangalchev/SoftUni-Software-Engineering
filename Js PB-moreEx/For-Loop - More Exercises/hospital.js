function hospital(input) {
  let day = Number(input.shift());
  let doctor = 7;
  pregledani = 0;
  nepregledani = 0;
  for (let d = 1; d <= day; d++) {
    let patient = Number(input.shift());
    if (d % 3 == 0) {
      if (pregledani<nepregledani){
        doctor++;
      }
    }
    if (doctor < patient) {
      pregledani += doctor;
      nepregledani += Math.abs(doctor - patient);
    } else if (doctor >= patient) {
      pregledani += patient;
    }
  }
  console.log(`Treated patients: ${pregledani}.`);
  console.log(`Untreated patients: ${nepregledani}.`);
}
hospital([6,
    25,
    25,
    25,
    25,
    25,
    2
    ]);
