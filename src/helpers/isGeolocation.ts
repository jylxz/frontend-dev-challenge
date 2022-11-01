export default function isGeolocation(
  object: GeolocationCoordinates | null | undefined
): object is GeolocationCoordinates {
  return object?.latitude !== undefined && object?.longitude !== undefined;
}
