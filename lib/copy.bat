COPY C:\src\ServiceStack.OrmLite\src\ServiceStack.OrmLite.Sqlite\bin\Release\* .
COPY C:\src\ServiceStack\src\ServiceStack.Server\bin\Release\* .
REM COPY C:\src\ServiceStack\src\ServiceStack.Server\bin\Debug\* .

COPY C:\src\ServiceStack\lib\signed\* signed\

COPY ..\src\ServiceStack.Admin\bin\Release\ServiceStack.Admin.* C:\src\ServiceStack\lib\tests