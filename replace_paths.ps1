$appDir = "app"
$landingDir = "landing-page"

$appFiles = Get-ChildItem -Path $appDir -Recurse -Filter *.html
foreach ($file in $appFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content.Replace("../theme.js", "../shared/theme.js")
    $content = $content.Replace("../resident-dashboard", "../resident")
    $content = $content.Replace("../admin-dashboard", "../admin")
    $content = $content.Replace("../login-and-create-account", "../auth")
    $content = $content.Replace("../landing-page", "../../landing-page")
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

$landingFiles = Get-ChildItem -Path $landingDir -Recurse -Filter *.html
foreach ($file in $landingFiles) {
    $content = Get-Content $file.FullName -Raw
    $content = $content.Replace("../login-and-create-account", "../app/auth")
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Output "Done replacing paths."
