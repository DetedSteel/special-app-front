@echo off
setlocal

:: URL для скачивания raw-файла
set "URL=https://raw.githubusercontent.com/TaperoOO5536/special_backend/main/pkg/openapi/special-backend.swagger.json"

:: Относительный путь к директории и имя файла
set "DIR=src\shared\api\config"
set "FILENAME=special-backend.swagger.json"
set "FULLPATH=%DIR%\%FILENAME%"

:: Скачивание с заменой существующего файла
powershell -Command "Invoke-WebRequest -Uri '%URL%' -OutFile '%FULLPATH%'"

:: Проверка результата
if %errorlevel% equ 0 (
    echo saved %FULLPATH%
) else (
    echo error
)

endlocal