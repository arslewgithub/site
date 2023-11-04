from vpython import *

# parameters -----

groundh = 0.5

ballr = 0.5

mass = 1

g = vector(0,-1.0,0)

b1 = 0.5

b2 = 0.0

# 3D graph -----

scene = canvas(title='Lecture 1', width= 1200, height=600, center=vector(0,12,0), background=vector(0.5, 0.5, 0),range=20)

ground = box(length=50, width=5, height=groundh, pos=vector(20,-groundh/2.0), texture=textures.wood)

ball = sphere(radius=ballr, pos=vector(0,30.0,0), color=vector(1,0,0),make_trail=True)

# 2D plot -----

figure1 = graph(xtitle='time', ytitle='v_y', xmin=0, xmax=20, ymin=0, ymax=10)

figure2 = graph(xtitle='time', ytitle='v_x', xmin=0, xmax=20, ymin=0, ymax=4)

vyt = gcurve(graph=figure1, color=color.red)
vxt = gcurve(graph=figure2, color=color.blue)

# initial conditions ------

t = 0.0

dt = 0.01

ball.v=vector(3.0,0.0,0.0)

#main program ------

while t < 20.0 and ball.pos.y > 0.0:

rate(400)

fx = -b1*ball.v.x -b2*abs(ball.v.x)*ball.v.x

fy = -b1*ball.v.y -b2*abs(ball.v.y)*ball.v.y

fz = -b1*ball.v.z -b2*abs(ball.v.z)*ball.v.z

force = mass*g + vector(fx,fy,fz)

ball.a = force/mass

ball.pos = ball.pos + ball.v*dt

ball.v = ball.v + ball.a*dt

vyt.plot(pos=(t,abs(ball.v.y)))

vxt.plot(pos=(t,abs(ball.v.x)) )

t = t + dt

print('terminal velocity = ', -mass*g.y/b1, abs(ball.v.y))