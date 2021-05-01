files = ['bwts-classes.js', 
         'bwts-vars.js', 
         'bwts-plc1.js',
         'bwts-plc2.js',
         'bwts-plc3.js',
         'bwts-stbd.js',
         'bwts-port.js',
         'bwts-aftp.js',
         'bwts-screen.js',
         'bwts-render.js',
         'bwts-sim.js',
         'bwts-app.js']

fcomb = open('split/bwts-combined.js', 'w')

for fn in files:
    fcomb.write('//filestart ' + fn + "\n")
    fout = open(fn, 'r')
    for rline in fout:
        fcomb.write(rline)
    fcomb.write('//filestop ' + fn + "\n")
    fout.close()