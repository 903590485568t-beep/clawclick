@echo off
echo Starting server... > server.log
call "C:\Program Files\nodejs\npm.cmd" run dev >> server.log 2>&1
