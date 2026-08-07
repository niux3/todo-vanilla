let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/www/divers/alsacreations/todo
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +13 index.html
badd +1 src/todoComponents/TodoForm.js
badd +7 src/main.js
badd +78 src/todoComponents/TodoComponent.js
badd +17 src/todoComponents/TodoList.js
badd +23 src/style.css
badd +8 src/templates/todo-form.html
badd +25 src/templates/todo-list.html
badd +11 src/todoComponents/TodoManager.js
badd +26 src/todoComponents/TodoFooter.js
badd +0 src/templates/todo-footer.html
argglobal
%argdel
$argadd index.html
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit src/todoComponents/TodoForm.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 95 + 95) / 191)
exe 'vert 2resize ' . ((&columns * 95 + 95) / 191)
argglobal
balt src/todoComponents/TodoList.js
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 1 - ((0 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("src/templates/todo-form.html", ":p")) | buffer src/templates/todo-form.html | else | edit src/templates/todo-form.html | endif
if &buftype ==# 'terminal'
  silent file src/templates/todo-form.html
endif
balt src/todoComponents/TodoForm.js
setlocal foldmethod=expr
setlocal foldexpr=v:lua.LazyVim.treesitter.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 8 - ((7 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
let s:c = 100 - ((78 * winwidth(0) + 47) / 95)
if s:c > 0
  exe 'normal! ' . s:c . '|zs' . 100 . '|'
else
  normal! 0100|
endif
wincmd w
exe 'vert 1resize ' . ((&columns * 95 + 95) / 191)
exe 'vert 2resize ' . ((&columns * 95 + 95) / 191)
tabnext
edit src/todoComponents/TodoComponent.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 95 + 95) / 191)
exe 'vert 2resize ' . ((&columns * 95 + 95) / 191)
argglobal
balt src/todoComponents/TodoManager.js
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
6
sil! normal! zo
6
sil! normal! zo
7
sil! normal! zo
7
sil! normal! zo
34
sil! normal! zo
35
sil! normal! zo
35
sil! normal! zo
36
sil! normal! zo
38
sil! normal! zo
40
sil! normal! zo
40
sil! normal! zo
40
sil! normal! zo
15
sil! normal! zo
32
sil! normal! zo
36
sil! normal! zo
38
sil! normal! zo
43
sil! normal! zo
44
sil! normal! zo
47
sil! normal! zo
47
sil! normal! zo
48
sil! normal! zo
48
sil! normal! zo
49
sil! normal! zo
38
sil! normal! zo
38
sil! normal! zo
47
sil! normal! zo
47
sil! normal! zo
47
sil! normal! zo
54
sil! normal! zo
55
sil! normal! zo
61
sil! normal! zo
61
sil! normal! zo
49
sil! normal! zo
49
sil! normal! zo
54
sil! normal! zo
54
sil! normal! zo
55
sil! normal! zo
75
sil! normal! zo
81
sil! normal! zo
88
sil! normal! zo
95
sil! normal! zo
95
sil! normal! zo
98
sil! normal! zo
98
sil! normal! zo
99
sil! normal! zo
114
sil! normal! zo
let s:l = 39 - ((38 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 39
normal! 034|
wincmd w
argglobal
if bufexists(fnamemodify("src/todoComponents/TodoManager.js", ":p")) | buffer src/todoComponents/TodoManager.js | else | edit src/todoComponents/TodoManager.js | endif
if &buftype ==# 'terminal'
  silent file src/todoComponents/TodoManager.js
endif
balt src/todoComponents/TodoComponent.js
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
1
sil! normal! zo
1
sil! normal! zo
7
sil! normal! zo
7
sil! normal! zo
8
sil! normal! zo
20
sil! normal! zo
24
sil! normal! zo
24
sil! normal! zo
27
sil! normal! zo
35
sil! normal! zo
35
sil! normal! zo
36
sil! normal! zo
36
sil! normal! zo
36
sil! normal! zo
36
sil! normal! zo
36
sil! normal! zo
41
sil! normal! zo
45
sil! normal! zo
49
sil! normal! zo
53
sil! normal! zo
57
sil! normal! zo
61
sil! normal! zo
61
sil! normal! zo
62
sil! normal! zo
72
sil! normal! zo
72
sil! normal! zo
75
sil! normal! zo
79
sil! normal! zo
90
sil! normal! zo
let s:l = 11 - ((10 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 11
normal! 016|
wincmd w
exe 'vert 1resize ' . ((&columns * 95 + 95) / 191)
exe 'vert 2resize ' . ((&columns * 95 + 95) / 191)
tabnext
edit src/todoComponents/TodoList.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
balt src/todoComponents/TodoManager.js
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 40 - ((39 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 40
normal! 010|
wincmd w
argglobal
if bufexists(fnamemodify("src/templates/todo-list.html", ":p")) | buffer src/templates/todo-list.html | else | edit src/templates/todo-list.html | endif
if &buftype ==# 'terminal'
  silent file src/templates/todo-list.html
endif
balt src/todoComponents/TodoManager.js
setlocal foldmethod=expr
setlocal foldexpr=v:lua.LazyVim.treesitter.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
1
sil! normal! zo
3
sil! normal! zo
6
sil! normal! zo
14
sil! normal! zo
let s:l = 25 - ((24 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 25
normal! 039|
wincmd w
2wincmd w
wincmd =
tabnext
edit src/todoComponents/TodoFooter.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
balt index.html
setlocal foldmethod=expr
setlocal foldexpr=v:lua.vim.lsp.foldexpr()
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
5
sil! normal! zo
5
sil! normal! zo
7
sil! normal! zo
11
sil! normal! zo
16
sil! normal! zo
17
sil! normal! zo
17
sil! normal! zo
18
sil! normal! zo
18
sil! normal! zo
19
sil! normal! zo
29
sil! normal! zo
33
sil! normal! zo
let s:l = 1 - ((0 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 038|
wincmd w
argglobal
if bufexists(fnamemodify("src/templates/todo-footer.html", ":p")) | buffer src/templates/todo-footer.html | else | edit src/templates/todo-footer.html | endif
if &buftype ==# 'terminal'
  silent file src/templates/todo-footer.html
endif
setlocal foldmethod=indent
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=99
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 1 - ((0 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
wincmd =
tabnext 3
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
