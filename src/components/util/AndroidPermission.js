export default const requestLocationPermission = async (title ,message ,type ,success ,error) {
  try {
    let constructType = `PermissionsAndroid.PERMISSIONS.${type}`
    const granted = await PermissionsAndroid.request(constructType
      ,
      {
        title,
        message
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      success()
    } else {
      error()
    }
  } catch (err) {
    console.warn(err)
  }
}
