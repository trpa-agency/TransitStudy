@echo off
rem Set or change the passphrase for the full funding model page. Saves only its hash.
setlocal
cd /d "%~dp0"
set "PROPY=propy"
where propy >nul 2>nul || set "PROPY=%ProgramFiles%\ArcGIS\Pro\bin\Python\scripts\propy.bat"
call "%PROPY%" set_passphrase.py
echo.
pause
