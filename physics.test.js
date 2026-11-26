const test=require('node:test'),assert=require('node:assert/strict'),{rack,step}=require('./physics');
for(const mode of ['br','8','bar'])test('simulação idêntica e término '+mode,()=>{let a=rack(mode);a[0].vx=34;let b=structuredClone(a);let i=0;while(a.some(x=>x.vx||x.vy)&&i++<2000){step(a);step(b);}assert.ok(i<2000);assert.deepEqual(a,b);});
test('desaceleração residual monotônica',()=>{let a=[{n:0,x:230,y:250,vx:.3,vy:0}],n=0;while(a[0].vx&&n++<30){let v=a[0].vx;step(a);assert.ok(a[0].vx<v);}assert.equal(a[0].vx,0);assert.ok(n<12);});
