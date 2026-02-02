@echo off
echo ========================================================
echo   STARTING GITHUB UPLOAD
echo ========================================================
echo.

:: 1. Init
if not exist .git (
    echo [1/6] Initializing repository...
    git init
) else (
    echo [1/6] Repository already initialized.
)

:: 2. Add
echo [2/6] Adding files...
git add .

:: 3. Commit
echo [3/6] Committing changes...
git commit -m "Manual upload: ClawClick Premium"

:: 4. Branch
echo [4/6] Setting main branch...
git branch -M main

:: 5. Remote
echo [5/6] Configuring remote...
git remote remove origin 2>nul
git remote add origin https://github.com/903590485568t-beep/clawclick.git

:: 6. Push
echo [6/6] PUSHING TO GITHUB...
echo.
echo NOTE: A browser window or password prompt may appear.
echo Please log in if requested.
echo.
git push -u origin main

echo.
echo ========================================================
if %errorlevel% equ 0 (
    echo   SUCCESS! FILES UPLOADED.
) else (
    echo   ERROR! SOMETHING WENT WRONG.
    echo   Check your internet or permissions.
)
echo ========================================================
echo.
pause
