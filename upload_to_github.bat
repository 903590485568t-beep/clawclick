@echo off
cd /d "%~dp0"
echo ========================================================
echo   STARTING GITHUB UPLOAD
echo ========================================================
echo.

:: 1. Init
if not exist .git (
    echo [1/6] Initializing repository...
    git init
    git branch -M main
) else (
    echo [1/6] Repository already initialized.
)

:: 2. Remote
echo [2/6] Configuring remote...
git remote remove origin
git remote add origin https://github.com/903590485568t-beep/clawclick.git

:: 3. Add
echo [3/6] Adding files...
git add .

:: 4. Commit
echo [4/6] Committing changes...
git commit -m "Update: Premium visuals, spring animation, and custom branding"

:: 5. Push
echo [5/6] Pushing to GitHub...
git push -u origin main --force

echo.
echo ========================================================
echo   DONE! Check your repository.
echo ========================================================
pause
